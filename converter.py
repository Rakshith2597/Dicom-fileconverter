from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for,flash
from werkzeug import secure_filename
import numpy as np
import struct
import os
import dicom, dicom.UID
from dicom.dataset import Dataset, FileDataset
import datetime, time
from flask_dropzone import Dropzone
import Image
import pylab




UPLOADED_PATH= '/home/rakshith/Internship/uploads'
app = Flask(__name__)
app.config['UPLOADED_PATH'] = UPLOADED_PATH
app.secret_key = 'random string'

app.config['DROPZONE_ALLOWED_FILE_TYPE'] = '.dcm'
app.config.update(

    # Flask-Dropzone config:

    DROPZONE_MAX_FILE_SIZE=30,
    DROPZONE_ALLOWED_FILE_TYPE='.dcm',
    DROPZONE_MAX_FILES=1
)


dropzone = Dropzone(app)

con_file=''


@app.route('/')
def upl():
    return render_template('upload.html')


@app.route('/uploader', methods=['GET' , 'POST'])
def uploader():
      if request.method == 'POST':
          f = request.files.get('file')

          lstfilesDCM=[]  #empty list

          #f1=open(secure_filename(f.filename))
          filename=secure_filename(f.filename)
          f.save(os.path.join(app.config['UPLOADED_PATH'], filename))



          if ".dcm" in f.filename.lower():
              lstfilesDCM.append(f.filename) #append is not actually necessary
              m=lstfilesDCM[0] #used list to create multiple files uploader later
              name=m[:-4]
              name=name+".czb"
              con_file=name

              ds=dicom.read_file('uploads/'+lstfilesDCM[0]) #Read the dicom file

              pixel_array_numpy = ds.pixel_array  # returns a NumPy array for uncompressed images
              dimensions = ds.pixel_array.shape


              image_height=ds.Rows #Extract required data of dicom files

              image_width=ds.Columns
              image_bit=ds.BitsAllocated
              ds.PixelData=ds.pixel_array
              image_pixel=ds.PixelData


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
              f.close()


              os.remove(os.path.join(app.config['UPLOADED_PATH'], filename))
              name_file=open('uploads/name.txt','w')
              name_file.write(con_file)
              name_file.close()

              pylab.imshow(ds.pixel_array,cmap=pylab.cm.bone) # pylab readings and conversion
              ab=pylab.savefig("static/img_rgb.png"  )

              #return render_template("download.html")

              return redirect(url_for('downloader'))

          else:
              flash('Hey! Thats not a .dcm file. Check again')
              return render_template('upload.html')




@app.route('/downloader')

def downloader():
    name_file=open('uploads/name.txt','rw+')
    conv_name=name_file.readline()

    name_file.close()
    #os.remove(os.path.join(app.config['UPLOADED_PATH'],'name.txt' ))


    return send_from_directory(app.config['UPLOADED_PATH'],conv_name, as_attachment='True')

@app.route('/script_download')

def script_download():

    return send_from_directory('/home/rakshith/Internship/downloadables','czb_to_dcm_script.tar.gz', as_attachment='True')








@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):

    return render_template('500.html'), 500

if __name__ == '__main__':
   app.run()
