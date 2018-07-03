
from base import *
from Model_Encoder import *

conv_name=''

def encoder(conv_name):
              lstfilesDCM=[]  #empty list
              lstfilesDCM.append(conv_name) #append is not actually necessary
              m=lstfilesDCM[0] #used list to create multiple files uploader later
              name=m[:-4]
              name=name+".czb"
              con_file=name

              ds=pydicom.read_file('uploads/'+lstfilesDCM[0]) #Read the dicom file

              pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
              dimensions = ds.pixel_array.shape


              image_height=ds.Rows #Extract required data of dicom files

              image_width=ds.Columns
              image_bit=ds.BitsAllocated
              ds.PixelData=ds.pixel_array
              image_pixel=ds.PixelData
              q, w=image_pixel.shape
              print q,w
              print image_pixel


              #converts data to binary


              width=struct.pack('Q',image_width)
              height=struct.pack('Q',image_height)
              bit=struct.pack('B',image_bit)
              pdata=image_pixel.tobytes()

              stat=3
              status=struct.pack('B',stat)

              ident='CRAZY BITMAP    '
              ide=ident.encode('ASCII')

              #write into file a new file

              new_file=open('uploads/'+con_file,'wb')
              new_file.write(ide)
              new_file.write(status)
              new_file.write(height)
              new_file.write(width)
              new_file.write(bit)
              new_file.write(pdata)


              new_file.close()
              #f.close()


              os.remove(os.path.join(app.config['UPLOADED_PATH'], conv_name))
              #flash(con_file)
              name_file=open('uploads/name.txt','w')
              name_file.write(con_file)
              name_file.close()

              download()

def download():
    name_file=open('uploads/name.txt','r')
    conv_name=name_file.readline()

    name_file.close()

    return conv_name


if __name__ == '__main__':
    encoder()
