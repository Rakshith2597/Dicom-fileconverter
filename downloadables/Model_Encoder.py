
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
import pydicom
from bitstring import Bits
from base import *


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

def encoder(conv_name):
	net = torch.load('M/Train1_Dream_8.pt')
	encoder = net.module.encoder

	###############$$$$$$$$$$$$$################################
	lstfilesDCM=[]  #empty list
	lstfilesDCM.append(conv_name) #append is not actually necessary
	m=lstfilesDCM[0] #used list to create multiple files uploader later
	name=m[:-4]
	name=name+".czb"
	con_file=name

	image=pydicom.read_file('uploads/'+lstfilesDCM[0])
	imgfile = pydicom.read_file('uploads/'+lstfilesDCM[0]).pixel_array # Load Image Numpy Format
	###################################################
	w, h = imgfile.shape
	print "the first shape is",w,h

	#########$$$$$$$$$############
	image_height=image.Rows #Extract required data of dicom files

	image_width=image.Columns

	############
	w1 = (int(np.floor(w/16)) + 1)*16 - w
	h1 = (int(np.floor(h/16)) + 1)*16 - h
	imgfile = np.pad(imgfile, ((int(w1/2),w1-int(w1/2)),(int(h1/2),h1-int(h1/2))), 'constant', constant_values=0)
	print(imgfile.shape)
	q,e=imgfile.shape




	imgfile = torch.unsqueeze(torch.unsqueeze(torch.from_numpy(imgfile.astype(float)),0).float(),0)
	imgfile = imgfile/4095.0
	imgfile = encoder(Variable(imgfile))

	#print "the shape is",q,e,len(imgfile)



	imgfile = imgfile.data
	imgfile = imgfile[0]

	imgfile = torch.round((imgfile.clamp(0.0,1.0))*(255.0))
	imgfile = imgfile.numpy().astype(np.uint8)
	imgfile = imgfile.flatten()
	b = Bits().join(Bits(uint=x, length=8) for x in imgfile) # Save b (bit data) with a header [8,w,h]

	pdata=b.tobytes()
	print len(pdata)

	#########$$$$$$$$$$$#############
	stat=3
	status=struct.pack('B',stat)
	ident='CRAZY BITMAP    '
	ide=ident.encode('ASCII')
	width=struct.pack('Q',w)
	height=struct.pack('Q',h)
	image_bit=8
	bit=struct.pack('B',image_bit)
	new_file=open('uploads/'+con_file,'wb')
	new_file.write(ide)
	new_file.write(status)
	new_file.write(height)
	new_file.write(width)
	new_file.write(bit)
	new_file.write(pdata)


	new_file.close()


	#flash(con_file)
#
# 	name_file=open('uploads/name.txt','w')
# 	name_file.write(con_file)
# 	name_file.close()
#
# 	download()
#
# def download():
# 	name_file=open('uploads/name.txt','r')
# 	conv_name=name_file.readline()
#
# 	name_file.close()
#
# 	return conv_name
