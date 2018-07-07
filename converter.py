from base import *
from Model_Encoder import *

###############################################################
#LINK TO DATABASE (NOT YET USED) COULD BE USED IN FUTURE
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite://///home/rakshith/dicom_converter/Dicom-fileconverter/uploads/filestorage.db'
# db=SQLAlchemy(app)
#
# class filecontents(db.Model):
#     id=db.Column(db.Integer,primary_key=True)
#     name=db.Column(db.String(300))
#     data=db.column(db.LargeBinary)
################################################################

global name
name=''
@app.route('/')
def upl():
    return render_template('upload.html')

@app.route('/uploader', methods=['GET' , 'POST'])
def uploader():
      if request.method == 'POST':
          f = request.files.get('file')

          lstfilesDCM=[]  #empty list(ext:COULD BE USED TO HANDLE MULTIPLE FILES)


          filename=secure_filename(f.filename)

          f.save(os.path.join(app.config['UPLOADED_PATH'], filename))
          global name
          name=filename

          f.close()


          if ".dcm" in filename.lower():
              # ds=pydicom.read_file('uploads/'+filename)
              # arr=ds.pixel_array
              # max=np.amax(arr)
              #
              # if max==4095:
              #     arr = arr/(max+0.0)
              #     arr=arr*255.0
              #
              # im = fromarray(arr).convert("L")  ## Saving preview image
              # im.save('static/dicom.png')
              encoder(filename) #COMPRESSION

              @after_this_request
              def remove_file(response):
                  try:
                      os.remove(app.config['UPLOADED_PATH']+'/'+filename)
                      #file_handle.close()
                  except Exception as error:
                      app.logger.error("Error removing or closing downloaded file handle", error)
                  return response

              return redirect(url_for('preview'))

          else:
              return render_template('upload.html')


@app.route('/downloader',methods=['GET' , 'POST'])

def downloader():
    conv_name=name[:-3]+'czb'

    #os.remove('/home/rakshith/dicom_converter/Dicom-fileconverter/static/dicom.png')
    file_handle = open(app.config['UPLOADED_PATH']+'/'+conv_name, 'r')
    @after_this_request
    def remove_file(response):
        try:
            os.remove(app.config['UPLOADED_PATH']+'/'+conv_name)
            #file_handle.close()
        except Exception as error:
            app.logger.error("Error removing or closing downloaded file handle", error)
        return response

    return send_file(file_handle, as_attachment='True',attachment_filename=conv_name)



@app.route('/script_download')

def script_download():

    return send_from_directory('/home/rakshith/dicom_converter/Dicom-fileconverter/downloadables','czb_to_dcm.tar.gz', as_attachment='True')


#
# @app.route('/loop',methods=['GET','POST'])
#
# #BACK TO HOMEPAGE WITH PNG
# def loop():
#     full_filename = '/home/rakshith/dicom_converter/Dicom-fileconverter/static/dicom.png'
#     return redirect(url_for('preview'))

@app.route('/preview',methods=['GET','POST'])
def preview():
    return render_template("upload.html")




@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404



@app.errorhandler(500)
def internal_error(error):

    return render_template('500.html'), 500

if __name__ == '__main__':
   app.run()
