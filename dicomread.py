import dicom
import sys
import numpy as np
import io
import struct
import pickle
import Image
import pylab

def extracting():
    ds = dicom.read_file("CT-MONO2-16-brain.dcm")



    pixel=ds.PixelData
    pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
    dimensions = ds.pixel_array.shape

    ds.PixelData = ds.pixel_array
    ss=ds.PatientName



    image_height=ds.Rows

    image_width=ds.Columns
    image_bit=ds.BitsAllocated

    image_pixel=ds.PixelData

    img_pix = image_pixel.tobytes()

    #print(img_pix)

    #print type(image_pixel[0][0])





    width=struct.pack('Q',image_width)

    height=struct.pack('Q',image_height)
    #print height
    bit=struct.pack('B',image_bit)
    #pdata=struct.pack('H',image_pixel)
    #pdata=image_pixel.tobytes()
    pdata = pickle.dumps(image_pixel)
    #print(pdata)
    #print(type(pdata))
    #print pdata
    stat=3
    status=struct.pack('B',stat)

    ident='CRAZY BITMAP    '
    ide=ident.encode('ASCII')

    #write into files remaining
    new_file=open('/home/rakshith/Internship/uploads'+'CT-MONO2-16-brain.czb','wb')
    new_file.write(ide)
    new_file.write(status)
    new_file.write(height)
    new_file.write(width)
    new_file.write(bit)
    new_file.write(pdata)

    pylab.imshow(ds.pixel_array,cmap=pylab.cm.bone) # pylab readings and conversion
    pylab.show()





def main():
    extracting()

if __name__=='__main__':
    main()
