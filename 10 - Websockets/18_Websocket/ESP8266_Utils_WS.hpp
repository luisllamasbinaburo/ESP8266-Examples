WebSocketsServer webSocket = WebSocketsServer(81);

void webSocketEvent(uint8_t num, WStype_t type, uint8_t * payload, size_t lenght) 
{
	switch(type) {
	case WStype_DISCONNECTED:
		break;
	case WStype_CONNECTED:
		//IPAddress ip = webSocket.remoteIP(num);
		//webSocket.sendTXT(num, "Connected");
		break;
	case WStype_TEXT:
		String response = ProcessRequest();
		webSocket.sendTXT(num, response);
		break;
	}
}

void InitWebSockets() {
	webSocket.begin();
	webSocket.onEvent(webSocketEvent);
	Serial.println("WebSocket server started");
}