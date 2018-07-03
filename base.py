from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for,flash
from werkzeug import secure_filename
import numpy as np
import struct
import os
import pydicom
from pydicom.dataset import Dataset, FileDataset
import datetime, time
from flask_dropzone import Dropzone

from PIL.Image import fromarray
from flask_assets import Bundle,Environment


UPLOADED_PATH= '/home/rakshith/dicom_converter/Dicom-fileconverter/uploads'
app = Flask(__name__)
app.config['UPLOADED_PATH'] = UPLOADED_PATH
app.secret_key = 'random string'
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
#app.config['DROPZONE_ALLOWED_FILE_TYPE'] = '.dcm'
app.config.update(

    # Flask-Dropzone config:

    DROPZONE_MAX_FILE_SIZE=30,
    DROPZONE_ALLOWED_FILE_TYPE='.dcm',
    DROPZONE_MAX_FILES=1
)


js=Bundle('jquery.min.js','upla.js','dropzone.js','something.js','cornerstone.min.js',
'cornerstoneMath.min.js','cornerstoneTools.min.js','dicomParser.min.js','cornerstoneWADOImageLoader.js',
'uids.js','initializeWebWorkers.js',output='gen/main.js')

css=Bundle('up.css','dropzone.css','bootstrap.min.css','cornerstone.min.css',output='gen/main.css')
assets=Environment(app)
assets.register('main_js',js)
assets.register('main_css',css)

dropzone = Dropzone(app)

con_file=''
lstfilesDCM=[]  #empty list
