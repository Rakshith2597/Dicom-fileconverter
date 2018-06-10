from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for
from werkzeug import secure_filename
import struct
import os
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

def uploader():
    if request.method == 'POST':
        f = request.files.get('file')

        lstfilesDCM=[]  #empty list

        #f1=open(secure_filename(f.filename))
        filename=secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOADED_PATH'], filename))

         if ".czb" in f.filename.lower():
             lstfilesDCM.append(f.filename) #append is not actually necessary
             m=lstfilesDCM[0] #used list to create multiple files uploader later
             name=m[:-4]
             name=name+".dcm"
             con_file=name

             #DATA FROM CZB SHOULD BE EXTRACTED

             new_file=open('/home/rakshith/Internship/uploads/'+con_file,'rb')
             content=new_file.read()

             rows=np.frombuffer(content,dtype='B',count=2,offset=18)




















"""

             file_meta = Dataset()
             file_meta.MediaStorageSOPClassUID = 'Secondary Capture Image Storage'
             file_meta.MediaStorageSOPInstanceUID = '1.3.6.1.4.1.9590.100.1.1.111165684411017669021768385720736873780'
             file_meta.ImplementationClassUID = '1.3.6.1.4.1.9590.100.1.0.100.4.0'
             ds = FileDataset(con_filename, {},file_meta = file_meta,preamble="\0"*128)
             ds.Modality = 'WSD'
             ds.ContentDate = str(datetime.date.today()).replace('-','')
             ds.ContentTime = str(time.time()) #milliseconds since the epoch
             ds.StudyInstanceUID =  '1.3.6.1.4.1.9590.100.1.1.124313977412360175234271287472804872093'
             ds.SeriesInstanceUID = '1.3.6.1.4.1.9590.100.1.1.369231118011061003403421859172643143649'
             ds.SOPInstanceUID =    '1.3.6.1.4.1.9590.100.1.1.111165684411017669021768385720736873780'
             ds.SOPClassUID = 'Secondary Capture Image Storage'
             ds.SecondaryCaptureDeviceManufctur = 'Python 2.7.3'
             ds.SamplesPerPixel = 1
             ds.PhotometricInterpretation = "MONOCHROME2"
             ds.PixelRepresentation = 0
             ds.HighBit = 15
             ds.BitsStored = 16
             #ADD BITS ALLOCATED
             ds.SmallestImagePixelValue = '\\x00\\x00'
             ds.LargestImagePixelValue = '\\xff\\xff'
             #ADD ROWS AND COLUMN VALUES
             #ADD PIXEL ARRAY VALUES

             if pixel_array.dtype != np.uint16:
                 pixel_array = pixel_array.astype(np.uint16)
             ds.PixelData = pixel_array.tostring()

             #ADD FILE NAME AS WELL
             ds.save_as(filename)
             return
"""
