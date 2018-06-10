from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for
from werkzeug import secure_filename
import numpy as np
import struct
import os
import dicom, dicom.UID
from dicom.dataset import Dataset, FileDataset
import datetime, time
from flask_dropzone import Dropzone




UPLOADED_PATH= '/home/rakshith/Internship/uploads'
app = Flask(__name__)
app.config['UPLOADED_PATH'] = UPLOADED_PATH

app.config.update(

    # Flask-Dropzone config:

    DROPZONE_MAX_FILE_SIZE=30,
    DROPZONE_MAX_FILES=1,
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


              os.remove(os.path.join(app.config['UPLOADED_PATH'], filename))

              return redirect(url_for('downloader',
                                     filename=con_file))

          elif ".czb" in f.filename.lower():
                lstfilesDCM.append(f.filename) #append is not actually necessary
                m=lstfilesDCM[0] #used list to create multiple files uploader later
                name=m[:-4]
                name=name+".dcm"
                con_file=name

                #DATA FROM CZB SHOULD BE EXTRACTED

                new_file=open('uploads/'+lstfilesDCM[0],'rb')

                #MOVES TO THE LOCATION WHERE THE REQUIRED DATA IS
                new_file.seek(17)
                r=new_file.read(8)
                rows=struct.unpack('Q',r)[0]


                new_file.seek(25)
                c=new_file.read(8)
                columns=struct.unpack('Q',c)[0]


                new_file.seek(33)
                b=new_file.read(1)
                bpp=struct.unpack('B',b)[0]



                new_file.seek(34)
                pixeldata = new_file.read()



                #ADD THE ADDITIONAL DATA THAT IS REQUIRED AND NOT IN CZB
                file_meta = Dataset()
                file_meta.MediaStorageSOPClassUID = 'Secondary Capture Image Storage'
                file_meta.MediaStorageSOPInstanceUID = '1.3.6.1.4.1.9590.100.1.1.111165684411017669021768385720736873780'
                file_meta.ImplementationClassUID = '1.3.6.1.4.1.9590.100.1.0.100.4.0'
                ds = FileDataset(filename, {},file_meta = file_meta,preamble="\0"*128)

                ds.Modality = 'CT'    #NOT IN CZB BUT NECESSARY

                ds.ContentDate = str(datetime.date.today()).replace('-','')
                ds.ContentTime = str(time.time()) #milliseconds since the epoch
                ds.StudyInstanceUID =  '1.3.6.1.4.1.9590.100.1.1.124313977412360175234271287472804872093'
                ds.SeriesInstanceUID = '1.3.6.1.4.1.9590.100.1.1.369231118011061003403421859172643143649'
                ds.SOPInstanceUID =    '1.3.6.1.4.1.9590.100.1.1.111165684411017669021768385720736873780'
                ds.SOPClassUID = 'Secondary Capture Image Storage'
                ds.SecondaryCaptureDeviceManufctur = 'Python 2.7.3'
                ds.SamplesPerPixel = 1
                ds.PhotometricInterpretation = "MONOCHROME2"

                ds.PixelRepresentation = 1  #NOT IN CZB BUT NECESSARY

                ds.HighBit = 15
                ds.BitsStored = 16

                ds.WindowCenter = 50 #NOT IN CZB BUT NECESSARY
                ds.WindowWidth = 75  #NOT IN CZB BUT NECESSARY

                #ADD BITS ALLOCATED
                ds.BitsAllocated=bpp

                #ADD ROWS AND COLUMN VALUES
                #ADD PIXEL ARRAY VALUES
                ds.Rows=rows
                ds.Columns=columns

                ds.PixelData = pixeldata

                #ADD FILE NAME AS WELL
                ds.save_as('uploads/'+con_file)
                return redirect(url_for('downloader',
                                       filename=con_file))



@app.route('/downloader/<filename>')

def downloader(filename):


           return send_from_directory(app.config['UPLOADED_PATH'],
                               filename, as_attachment='True')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    
    return render_template('500.html'), 500

if __name__ == '__main__':
   app.run()
