from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for,flash,after_this_request
from werkzeug import secure_filename
import numpy as np
import struct
import os
import pydicom
from pydicom.dataset import Dataset, FileDataset
import datetime, time
from flask_dropzone import Dropzone
from flask_sqlalchemy import SQLAlchemy
from PIL.Image import fromarray
from flask_assets import Bundle,Environment
import dropbox
# from flask_dropbox import blueprint


UPLOADED_PATH= '/home/rakshith/dicom_converter/Dicom-fileconverter/uploads'
app = Flask(__name__)
app.config['UPLOADED_PATH'] = UPLOADED_PATH

# dropbox = Dropbox(app)
# dropbox.register_blueprint(url_prefix='/dropbox')

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
#app.config['DROPZONE_ALLOWED_FILE_TYPE'] = '.dcm'
app.config.update(


    DROPZONE_MAX_FILE_SIZE=30,
    DROPZONE_ALLOWED_FILE_TYPE='.dcm',
    DROPZONE_MAX_FILES=1,
    #
    # SECRET_KEY = 'poilkjmnb',
    # DROPBOX_KEY = 'q35o4p01rr1byor',
    # DROPBOX_SECRET = 'u3qy0hch1usdy8t',
    # DROPBOX_ACCESS_TYPE = 'dropbox'
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
