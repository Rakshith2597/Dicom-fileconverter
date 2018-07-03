import pydicom
import sys
import numpy as np
import io
import struct
import pickle
#import Image
#import pylab

def extracting():
    ds = pydicom.read_file("000135.dcm")



    pixel=ds.PixelData
    pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
    dimensions = ds.pixel_array.shape

    ds.PixelData = ds.pixel_array
    ss=ds.PatientName

    tt=ds.ImageType
    print tt
    print ds.Modality
    print ds.SamplesPerPixel
    print ds.PhotometricInterpretation
    print ds.PixelRepresentation
    print ds.HighBit
    print ds.BitsStored
    print ds.WindowCenter
    print ds.BitsAllocated
    print ds.RescaleIntercept
    print ds.RescaleSlope
    print ds.RescaleType

    #print ds.SmallestImagePixelValue Rescale Intercept                   DS: "0"
   
    print ds.PixelPaddingValue
    print ds.is_decompressed
    print ds.is_original_encoding
    #print ds.elements
    print ds.file_meta.TransferSyntaxUID
    print ds.is_little_endian
    print ds.is_implicit_VR
    print ds.PixelSpacing
    print ds.PixelAspectRatio
    print len(ds.PixelData)
    #print ds.SmallestImagePixelValue
    #Pixel Spacing                       DS: ['0.0700', '0.0700']
#(0028, 0034) Pixel Aspect Ratio                  IS: ['180', '180']











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
    pdata=image_pixel.tobytes()
    #pdata = pickle.dumps(image_pixel)
    #print(pdata)
    #print(type(pdata))
    #print pdata
    stat=3
    status=struct.pack('B',stat)

    ident='CRAZY BITMAP    '
    ide=ident.encode('ASCII')

    #write into files remaining
    new_file=open('newfile.czb','wb')
    new_file.write(ide)
    new_file.write(status)
    new_file.write(height)
    new_file.write(width)
    new_file.write(bit)
    new_file.write(pdata)

    #pylab.imshow(ds.pixel_array,cmap=pylab.cm.bone) # pylab readings and conversion
    #pylab.show()





def main():
    extracting()

if __name__=='__main__':
    main()
