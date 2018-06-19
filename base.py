from flask import Flask,render_template,request,send_file,send_from_directory,redirect,url_for,flash
from werkzeug import secure_filename
import numpy as np
import struct
import os
import dicom, dicom.UID
from dicom.dataset import Dataset, FileDataset
import datetime, time
from flask_dropzone import Dropzone
import PIL as pillow
from PIL import Image
from PIL.Image import fromarray



UPLOADED_PATH= '/home/rakshith/Internship/uploads'
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



dropzone = Dropzone(app)

con_file=''
lstfilesDCM=[]  #empty list