from base import *
#from Model_Encoder import *
from flask_socketio import SocketIO,send
from server import *

import wget

import paramiko
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

proxies = {
      'http': 'http://172.16.2.30:5000',
      'https': 'http://172.16.2.30:5000',
    }
socketio= SocketIO(app)



global name
name=''
@app.route('/')
def upl():

    return render_template('upload.html')

@app.route('/uploader', methods=['GET' , 'POST'])
def uploader():



      if request.method == 'POST':



          url_dict = request.get_json()

          #socketio.send('Intializing===')
          socketio.send('5')
          socketio.sleep(0)




          if url_dict:
              url=url_dict.get('link')
              # a = urlparse.urlparse(url)
              # a=a.path
              # filename=os.path.basename(a.path)
              filename = url.split("/")[-1]
              #
              # wget.download(url,'uploads/'+filename)
              r = requests.get(url)
              with open('uploads/'+filename,'wb') as f:

                  f.write(r.content)
                  f.close()



          else:
              f = request.files.get('file')
              filename=secure_filename(f.filename)
              f.save(os.path.join(app.config['UPLOADED_PATH'], filename))
              f.close()


          lstfilesDCM=[]  #empty list(ext:COULD BE USED TO HANDLE MULTIPLE FILES)


          global name
          name=filename
          #socketio.send('====>FileRecived=====')
          socketio.send('13')
          socketio.sleep(0)




          if ".dcm" in filename.lower():
              SCRIPT_DIR = '/home/miriad1c/compression/'

              src_fold = os.path.abspath('/home/rakshith/dicom_converter/Dicom-fileconverter/uploads/')
              dcm_file = filename
              dest_fold = SCRIPT_DIR # <- don't change

              if os.path.exists(os.path.join(src_fold, dcm_file)):
                  client = copy_to_and_from(None,
                    credential_dict = {'hostname': '10.9.7.9','username': 'miriad1c','password': 'sipiitkgp'},
                    src_dcm_file = os.path.join(src_fold, dcm_file),
                    dest_dcm_file = os.path.join(dest_fold, dcm_file)
                    )

        #Switching to send progress to Client
                  #socketio.send('====>Compressing=====')
                  socketio.send('35')
                  socketio.sleep(0)
        #Back to Intial socket

                  run_compression(client, dcm_file)
                  client = copy_to_and_from(client,
                    src_dcm_file = os.path.join(src_fold, dcm_file.split('.')[0] + '.czb'),
                    dest_dcm_file = os.path.join(dest_fold, dcm_file.split('.')[0] + '.czb'),
                    to = False,
                    end_conn_on_finish = True)

                  if client is None:
                      print('connection ended')
        # encoder(filename) #COMPRESSION


              @after_this_request
              def remove_file(response):
                  try:
                      os.remove(app.config['UPLOADED_PATH']+'/'+filename)
                      #file_handle.close()
                  except Exception as error:
                      app.logger.error("Error removing or closing downloaded file handle", error)
                  return response
              x={'key':'success'}


              # socketio.send('====>Compressed=====')
              socketio.send('80')
              socketio.sleep(0)
              #socketio.send('===>Click Download Button=====>')
              socketio.send('100')
              socketio.sleep(0)

              socketio.send('Compressed 100')
              socketio.sleep(0)




              return jsonify(x)

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

@app.route('/saver',methods=['POST'])

def saver():
    if request.method == 'POST':
        url = request.get_json()
        print url
    return '', 200



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

    return render_template('upload.html')




@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

# @app.route('/progress')
# def progress():
    # def generate():
	# 	x = 0
    #
	# 	while x <= 100:
	# 		yield "data:" + str(x) + "\n\n"
	# 		x = x + 10
	# 		time.sleep(0.5)
    #
    # return Response(generate(), mimetype= 'text/event-stream')


@app.errorhandler(500)
def internal_error(error):

    return render_template('500.html'), 500

if __name__ == '__main__':
   socketio.run(app)
