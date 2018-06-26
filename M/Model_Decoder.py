
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
import cv2
import time
import numpy as np
from bitstring import Bits


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
    net = torch.load('Train1_Dream_8.pt')
    decoder = net.module.decoder

    new_file=open('000135.czb','rb') #SPECIFY THE INPUT FILENAME

    #content=new_file.read()

    filename='conv.dcm'  #SPECIFY THE OUTPUT FILE NAME

    new_file.seek(17)
    rows=new_file.read(8)
    h=struct.unpack('Q',rows)[0]
    new_file.seek(25)
    columns=new_file.read(8)
    w=struct.unpack('Q',columns)[0]
    new_file.seek(33)
    bpp=new_file.read(1)
    b=struct.unpack('B',bpp)[0]
    new_file.seek(34)
    img = new_file.read()
    print w,h
    #print img
    #tp=struct.unpack('Q',img)
    imgfile=np.fromstring(img,sep='',dtype=np.uint8)
    #side = int(np.sqrt(len(imgfile)))
    #imgfile=np.array(tp)
    #imgfile = np.pad(imgfile, ((int(w1/2),w1-int(w1/2)),(int(h1/2),h1-int(h1/2))), 'constant', constant_values=0)

    print imgfile.shape,"the shape of the array"
    imgfile=imgfile.reshape((8,w/16,h/16))
    print imgfile.shape,"the shape of the array"
    # #print imgfile
    # print imgfile.ndim
	#
    # print "The numpy array is ",imgfile



	# Load bit data and convert into 8 bit data in a numpy array
	# Load w,h
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

#######################$$$$$$$$$$$$$$$$$$$$$$#########################
    file_meta = Dataset()
    file_meta.MediaStorageSOPClassUID = 'Secondary Capture Image Storage'
    file_meta.MediaStorageSOPInstanceUID = '1.3.6.1.4.1.9590.100.1.1.111165684411017669021768385720736873780'
    file_meta.ImplementationClassUID = '1.3.6.1.4.1.9590.100.1.0.100.4.0'
    ds = FileDataset(filename, {},file_meta = file_meta,preamble="\0"*128)
    #ds.BitsAllocated=bpp
    ds.Rows=rows
    ds.Columns=columns
    ds.PixelData = imgfile
    ds.save_as(filename)
    return "file saved"


def main():
    changer()

if __name__=='__main__':
    main()


	 # save imagefile
