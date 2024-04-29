import socket

UDP_IP = '192.168.43.237'
UDP_PORT = 8888
UDP_PAYLOAD = 'abcdef'

def yes_or_no(question):
    reply = str(input(question)).lower().strip()
    if reply[0] == 'y':
        return 0
    elif reply[0] == 'n':
        return 1
    else:
        return yes_or_no("Please Enter (y/n) ")
		
while True:
	try:
		sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
		sock.sendto(bytes(UDP_PAYLOAD, "utf-8"), (UDP_IP, UDP_PORT))    
		sock.close()
		print("UDP target IP:", UDP_IP)
		print("UDP target port:", UDP_PORT)
		print("message:", UDP_PAYLOAD)
		if(yes_or_no('Send again (y/n): ')):
			break
	except:
		pass

