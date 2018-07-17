
import os
import struct
import torch
import torchvision
from torch.autograd import Variable
from torch.autograd import Function
from torch.utils.data import TensorDataset,DataLoader
from torchvision import datasets,transforms
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
import dicom, dicom.UID
import pydicom
from dicom.dataset import Dataset, FileDataset
import matplotlib.pyplot as plt
import cv2
from PIL.Image import fromarray

import numpy as np
from bitstring import Bits
import datetime, time


class ClipReLU1(Function):

	@staticmethod
	def forward(self, input):
	    self.save_for_backward(input)
	    return torch.round((255.0)*input.clamp(min=0,max=1))/(255.0)

	@staticmethod
	def backward(self, grad_output):
	    input, = self.saved_tensors
	    grad_input = grad_output.clone()
	    grad_input[input < 0] = 0
	    grad_input[input > 1] = 0
	    return grad_input

class ClipReLU2(Function):

	@staticmethod
	def forward(self, input):
	    self.save_for_backward(input)
	    return torch.round(4095.0*input.clamp(min=0,max=1))/4095.0

	@staticmethod
	def backward(self, grad_output):
	    input, = self.saved_tensors
	    grad_input = grad_output.clone()
	    grad_input[input < 0] = 0
	    grad_input[input > 1] = 0
	    return grad_input

class autoencoder(nn.Module):
	def __init__(self):
	    super(autoencoder, self).__init__()
	    self.encoder = nn.Sequential(
		nn.Conv2d(in_channels=1, out_channels=64, kernel_size=3, stride=2, padding=1),
		nn.ELU(),

		nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3, stride=2, padding=1),
		nn.ELU(),

		nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3, stride=2, padding=1),
		nn.ELU(),

		nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3, stride=2, padding=1),
		nn.ELU(),

		nn.Conv2d(in_channels=64, out_channels=8, kernel_size=1, stride=1, padding=0))

	    self.decoder = nn.Sequential(
		nn.Conv2d(in_channels=8, out_channels=64, kernel_size=1, stride=1, padding=0),
		nn.ELU(),

		nn.Conv2d(in_channels=64, out_channels=64*4, kernel_size=3, stride=1, padding=1),
		nn.ELU(),
		nn.PixelShuffle(2),

		nn.Conv2d(in_channels=64, out_channels=64*4, kernel_size=3, stride=1, padding=1),
		nn.ELU(),
		nn.PixelShuffle(2),

		nn.Conv2d(in_channels=64, out_channels=64*4, kernel_size=3, stride=1, padding=1),
		nn.ELU(),
		nn.PixelShuffle(2),

		nn.Conv2d(in_channels=64, out_channels=4, kernel_size=3, stride=1, padding=1),
		nn.PixelShuffle(2))

	def forward(self, x):
	    x = self.encoder(x)
	    x = ClipReLU1.apply(x)
	    x = self.decoder(x)
	    x = ClipReLU2.apply(x)
	    return x

def changer():
    net = torch.load('Train1_Dream_8.pt') #LOAD THE REQUIRED MODEL
    decoder = net.module.decoder

    new_file=open('000135.kmxm','rb') #SPECIFY THE INPUT FILENAME


    filename='conv.dcm'  #SPECIFY THE OUTPUT FILE NAME

#READING THE REQUIRED CHARACTERS
    new_file.seek(33)
    rows=new_file.read(8)
    h=struct.unpack('Q',rows)[0]
    new_file.seek(41)
    columns=new_file.read(8)
    w=struct.unpack('Q',columns)[0]
    new_file.seek(49)
    bpp=new_file.read(1)
    b=struct.unpack('B',bpp)[0]
    new_file.seek(50)
    img = new_file.read()
    #print w,h
#CONVERTING TO THE VALUES WITH THE PADDING
    wn=(int(np.floor(w/16)) + 1)*16
    hn=(int(np.floor(h/16)) + 1)*16

    imgfile=np.fromstring(img,sep='',dtype=np.uint8)

    imgfile=imgfile.reshape((8,wn/16,hn/16))


    w1 = (int(np.floor(w/16)) + 1)*16 - w
    h1 = (int(np.floor(h/16)) + 1)*16 - h

    imgfile = torch.unsqueeze(torch.from_numpy(imgfile.astype(float)),0).float()
    imgfile = imgfile/255.0
    imgfile = decoder(Variable(imgfile))

    imgfile = imgfile.data
    imgfile = torch.round((imgfile.clamp(0.0,1.0))*(255.0))
    imgfile=imgfile[0]
    imgfile=imgfile[0]
    imgfile = imgfile.numpy().astype(np.uint16)

    imgfile = imgfile[int(w1/2):int(w1/2)+w,int(h1/2):int(h1/2)+h]
    #print "length of ",len(imgfile)

#SAVING PNG OF THE IMAGE (OPTIONAL)
    im = fromarray(imgfile).convert("L")  ## Saving preview image
    im.save('dicom.png')

    imgdata=imgfile.tostring()

#WRITING THE DICOM FILE
    file_meta = Dataset()
    file_meta.MediaStorageSOPClassUID = 'Secondary Capture Image Storage'
    file_meta.MediaStorageSOPInstanceUID = '1.3.6.1.4.1.9590.100.1.1.111165684411017669021768385720736873780'
    file_meta.ImplementationClassUID = '1.3.6.1.4.1.9590.100.1.0.100.4.0'
    ds = FileDataset(filename, {},file_meta = file_meta,preamble="\0"*128)
#INCASE OF IRREGULARTIES FROM ACTUAL IMAGE CHECK THESE VALUES WITH ACTUAL FILE
    ds.Modality = 'MG'
    ds.SamplesPerPixel = 1
    ds.PhotometricInterpretation = "MONOCHROME2"
    ds.PixelRepresentation = 0
    ds.HighBit = 11
    ds.BitsStored = 12
    ds.WindowCenter = 128
    ds.WindowWidth = 256
    ds.BitsAllocated= 16

    ds.Rows=w

    ds.Columns=h

    ds.PixelData=imgdata
    ds.save_as(filename)
    print "file saved"


def main():
    changer()

if __name__=='__main__':
    main()
