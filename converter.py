from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for

from werkzeug import secure_filename
import numpy as np
from PIL import Image
import struct
import os

import dicom


UPLOAD_FOLDER = '/home/rakshith/Internship/uploads'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

con_file=''

@app.route('/')
def upl():
    return render_template('upload.html')


@app.route('/uploader', methods=['GET' , 'POST'])
def uploader():
      if request.method == 'POST':
          f = request.files['file']

          lstfilesDCM=[]  #empty list

          #f1=open(secure_filename(f.filename))
          filename=secure_filename(f.filename)
          f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))



          if ".dcm" in f.filename.lower():
              lstfilesDCM.append(f.filename) #append is not actually necessary
              m=lstfilesDCM[0] #used list to create multiple files uploader later
              name=m[:-4]
              name=name+".czb"
              con_file=name





              ds=dicom.read_file('/home/rakshith/Internship/uploads/'+lstfilesDCM[0])

              pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
              dimensions = ds.pixel_array.shape


              image_height=ds.Rows #Extract required data of dicom files
              image_width=ds.Columns
              image_bit=ds.BitsAllocated
              ds.PixelData=ds.pixel_array
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

              new_file=open('/home/rakshith/Internship/uploads/'+con_file,'wb')
              new_file.write(ide)
              new_file.write(status)
              new_file.write(height)
              new_file.write(width)
              new_file.write(bit)
              new_file.write(pdata)

              f.close()
              new_file.close()
             # new_file=open('/home/rakshith/Internship/uploads/'+con_file,'rb')

              os.remove(os.path.join(app.config['UPLOAD_FOLDER'], filename))

              #return send_file(new_file,attachment_filename=name,as_attachment='true')
             # return render_template('download.html',filename=con_file)
              return redirect(url_for('downloader',
                                     filename=con_file))
         



@app.route('/downloader/<filename>')

def downloader(filename):
         #return render_template('download.html')

           return send_from_directory(app.config['UPLOAD_FOLDER'],
                               filename, as_attachment='True')

         #return send_from_directory(new_file,attachment_filename=con_file,as_attachment='true') , 'downloaded'

    #os.remove('/home/rakshith/Internship/uploads/'+name)










if __name__ == '__main__':
   app.run()
