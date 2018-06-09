from flask import Flask,render_template,request,jsonify

from werkzeug import secure_filename
import numpy as np
from PIL import Image

import dicom



app = Flask(__name__)

@app.route('/')
def upl():
    return render_template('upload.html')


@app.route('/uploader', methods=['GET' , 'POST'])
def uploader():
      if request.method == 'POST':
          f = request.files['file']

          lstfilesDCM=[]  #empty list

          f1=open(secure_filename(f.filename))
          filenameDCM=secure_filename(f.filename)



          if ".dcm" in f.filename.lower():
              lstfilesDCM.append(f.filename)
              m=lstfilesDCM[0] #used list to create multiple files uploader later
              name=m[:-4]
              name=name+".czb"




          ds=dicom.read_file(lstfilesDCM[0])

          pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
          dimensions = ds.pixel_array.shape


          image_height=ds.Rows #Extract required data of dicom files
          image_width=ds.Columns
          image_bit=ds.BitsAllocated
          image_pixel=ds.PixelData
          image_data=(image_height*image_width*image_bit)/8

          #converts data to binary


          width=struct.pack('Q',image_height)
          height=struct.pack('Q',image_width)
          bit=struct.pack('B',image_bit)
          pdata=image_pixel.tobytes()
          stat=3
          status=struct.pack('B',stat)

          ident='CRAZY BITMAP    '
          ide=ident.encode('ASCII')

          #write into file a new file

          new_file=open(name,'wb')
          new_file.write(ide)
          new_file.write(status)
          new_file.write(height)
          new_file.write(width)
          new_file.write(bit)
          new_file.write(pdata)


          return new_file




if __name__ == '__main__':
   app.run()
