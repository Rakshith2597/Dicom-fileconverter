
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
import time
import numpy as np
import pydicom
from bitstring import Bits
# from base import *


#######################################################################################################
#                               NETWORK ARCHITECTURE REMOVED DUE TO Copyright                         #
#                                                                                                     #
#######################################################################################################

def encoder(conv_name):
	net = torch.load('Train1_Dream_8.pt')
	encoder = net.module.encoder

	###############$$$$$$$$$$$$$################################
	lstfilesDCM=[]  #empty list
	lstfilesDCM.append(conv_name) #append is not actually necessary
	m=lstfilesDCM[0] #used list to create multiple files uploader later
	name=m[:-4]
	con_file=name+'.kmxm'


	image=pydicom.read_file('uploads/'+lstfilesDCM[0])
	imgfile = pydicom.read_file('uploads/'+lstfilesDCM[0]).pixel_array # Load Image Numpy Format
	###################################################
	w, h = imgfile.shape
	print('the first shape is',w,h)

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
	# encoding is DONE

	# print(imgfile.size())

	def get_pdata( imgfile ):
		# get 'pdata' from imgfile
		imgfile = imgfile.data
		imgfile = imgfile[0]

		imgfile = torch.round((imgfile.clamp(0.0,1.0))*(255.0))
		imgfile = imgfile.numpy().astype(np.uint8)
		imgfile = imgfile.flatten()
		b = Bits().join(Bits(uint=x, length=8) for x in imgfile) # Save b (bit data) with a header [8,w,h]

		pdata = b.tobytes()
		return pdata

	# print(len(pdata))

	#########$$$$$$$$$$$#############
	def write_czb(pdata, w_orig, h_orig, cbz_file_name):
		stat=3
		status=struct.pack('B',stat)
		ident='KMXMV1          '
		ide=ident.encode('ASCII')
		source_ident='DICOM           '
		source_ide=source_ident.encode('ASCII')
		width=struct.pack('Q',w_orig)
		height=struct.pack('Q',h_orig)
		image_bit=8
		bit=struct.pack('B',image_bit)
		new_file=open('uploads/'+cbz_file_name, 'wb')
		new_file.write(ide)
		new_file.write(source_ide)
		new_file.write(status)
		new_file.write(height)
		new_file.write(width)
		new_file.write(bit)
		new_file.write(pdata)
		new_file.close()

	pdata_ = get_pdata(imgfile)
	write_czb(pdata_, w, h, con_file)


if __name__ == '__main__':
	encoder()
