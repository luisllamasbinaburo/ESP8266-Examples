AsyncWebSocket ws("/ws");

String GetMillis()
{
	return String(millis(), DEC);
}

void ProcessRequest(AsyncWebSocketClient * client, String request)
{
	String response = GetMillis();
	client->text(response);
}
