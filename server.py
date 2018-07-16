import paramiko as pmk

# DON'T CHANGE THIS
SCRIPT_DIR = '/home/miriad2a/compression/'

def connect_to_server(credential_dict):
	# connect to server using the given credentials
	# credential_dict: {
	# 	'hostname': '<hostname/IP>',
	#	'username': '<username>',
	#	'password': '<password>'
	# }

	client = pmk.SSHClient()
	client.set_missing_host_key_policy(pmk.AutoAddPolicy())

	# create the session with server
	try:
		client.connect(
			hostname = credential_dict['hostname'],
			username = credential_dict['username'],
			password = credential_dict['password']
			)
	except pmk.SSHException:
		print('problem in connecting to server .. please check manually'); exit()
	except pmk.AuthenticationException:
		print('authentication error .. possibly due to wrong credentials'); exit()
	else:
		print('connected to {0}@{1}'.format(credential_dict['username'], credential_dict['hostname']))

	return client


def copy_to_and_from(client, src_dcm_file, dest_dcm_file, credential_dict = None, to = True, end_conn_on_finish = False):
	# it copies a local file named 'src_dcm_file' (on local system)
	# to the location denoted by 'dest_dcm_file' (on dest. server).
	# connect to server with 'credentials_dict'.
	# set if it is TO or FROM (to = True/False).
	# set 'end_conn_on_finish' to True if want to close the connection on completion

	# connect to server if not already connected
	if credential_dict is not None:
		client = connect_to_server(credential_dict)

	# get an SFTP object
	if client.get_transport().is_active():
		# copy the file to server
		with client.open_sftp() as sftp:
			if to:
				print('copying {0} to {1}'.format(src_dcm_file, dest_dcm_file))
				sftp.put(src_dcm_file, dest_dcm_file)
			else:
				print('copying {1} to {0}'.format(src_dcm_file, dest_dcm_file))
				sftp.get(dest_dcm_file, src_dcm_file)
				sftp.remove(dest_dcm_file)

			print('copying done')
	else:
		print('connection lost .. please retry'); exit()

	if not end_conn_on_finish:
		return client
	else:
		client.close()
		return None


def run_compression(client, dcm_file, credential_dict = None):
	# run compression on compute server

	# if requested to work with new credectials
	# instead of an already existing client obj
	if credential_dict is not None:
		client = connect_to_server(credential_dict)

	# checking connection status is necessary
	if client.get_transport().is_active():
		print('running encoder ..')
		_, out, err = client.exec_command( # it's a non-blocking call !!! :(
			'bash -l -c "cd ~/compression; ./run_compression {0}"'.format(dcm_file))
		exit_status = out.channel.recv_exit_status() # it's a blocking call :)
		if exit_status != 0:
			print('remote pmk.exec_command() returned non-zero'); exit()

		print('encoding done ..')

if __name__ == '__main__':
	import os

	# variables specific to my setup
	src_fold = os.path.abspath('.')
	dcm_file = '_dicom.dcm'
	dest_fold = SCRIPT_DIR # <- don't change

	if os.path.exists(os.path.join(src_fold, dcm_file)):
		client = copy_to_and_from(None,
			credential_dict = {'hostname': '10.9.7.9','username': 'miriad1c','password': 'sipiitkgp'},
			src_dcm_file = os.path.join(src_fold, dcm_file),
			dest_dcm_file = os.path.join(dest_fold, dcm_file)
			)
		run_compression(client, dcm_file)
		client = copy_to_and_from(client,
			src_dcm_file = os.path.join(src_fold, dcm_file.split('.')[0] + '.czb'),
			dest_dcm_file = os.path.join(dest_fold, dcm_file.split('.')[0] + '.czb'),
			to = False,
			end_conn_on_finish = True)

		if client is None:
			print('connection ended')
