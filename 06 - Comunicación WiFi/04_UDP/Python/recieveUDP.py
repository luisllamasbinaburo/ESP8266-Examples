import socket

UDP_PORT = 8889

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(('', UDP_PORT))

while True:
	data, addr = sock.recvfrom(1024)
	print("received message:")
	print(data.decode('utf-8'))	