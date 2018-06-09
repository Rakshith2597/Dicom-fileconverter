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

          #return lstfilesDCM[0]


          ds=dicom.read_file(lstfilesDCM[0])

          pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
          dimensions = ds.pixel_array.shape

          image_type=ds.ImageType
          image_height=ds.Rows
          image_width=ds.Columns
          image_bit=ds.BitsAllocated
          image_pixel=ds.PixelData

         





          if (pixel_array_numpy.any()):
              return "content"








         # data= np.fromfile(f,dtype=np.uint8)
         # len=data.ndim

         # return len






          #return arr



          #img = Image.open(f1)
          #arr=np.array(f1)
          #return arr.shape

          #return arr.shape

          #return np.array(img.getdata(),np.uint8).reshape(img.size[1], img.size[0], 3)






         # if string=='JFIF':

         # img = img.convert('1')
         # img = img.tobitmap()

         # return img


if __name__ == '__main__':
   app.run()
