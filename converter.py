from base import *
from encoder import *


@app.route('/')
def upl():
    return render_template('upload.html')

@app.route('/upload', methods=['GET','POST'])

def upload():
    if request.method == 'POST':
        f = request.files.get('file')

        lstfilesDCM=[]  #empty list

        #f1=open(secure_filename(f.filename))
        filename=secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOADED_PATH'], filename))
        name_file=open('uploads/name.txt','w')
        name_file.write(filename)
        name_file.close()

        f.close()

        return redirect(url_for('preview'))



@app.route('/uploader', methods=['GET' , 'POST'])
def uploader():
      if request.method == 'POST':
          name_file=open('uploads/name.txt','r')
          conv_name=name_file.readline()
          name_file.close()

          if ".dcm" in conv_name.lower():
              encoder(conv_name)
              return redirect(url_for('downloader'))

          else:
              return render_template('upload.html')


@app.route('/downloader')

def downloader():
    conv_name=download()
    os.remove('/home/rakshith/Internship/static/dicom.png')
    #os.remove(os.path.join(app.config['UPLOADED_PATH'], filename))
    return send_from_directory(app.config['UPLOADED_PATH'],conv_name, as_attachment='True')



@app.route('/script_download')

def script_download():

    return send_from_directory('/home/rakshith/Internship/downloadables','czb_to_dcm_script.tar.gz', as_attachment='True')



@app.route('/preview',methods=['GET','POST'])
def preview():

    name_file=open('uploads/name.txt','r')
    file_name=name_file.readline()

    name_file.close()

    ds=dicom.read_file('uploads/'+file_name)
    im = fromarray(ds.pixel_array).convert("L")  ## Saving preview image
    im.save('static/dicom.png')

    return redirect(url_for('loop'))


@app.route('/loop',methods=['GET','POST'])

def loop():
    full_filename = '/home/rakshith/Internship/static/dicom.png'
    return render_template("upload.html", user_image = full_filename)













@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404



@app.errorhandler(500)
def internal_error(error):

    return render_template('500.html'), 500

if __name__ == '__main__':
   app.run()
