AsyncWebSocket ws("/ws");

void ProcessRequest(AsyncWebSocketClient * client, String request)
{
	Serial.println(request);
	StaticJsonDocument<200> doc;
	DeserializationError error = deserializeJson(doc, request);
	if (error) { return; }
	
	String command = doc["command"];
	if(command == "Set")
	{
		setData(client, request);
	}
	if(command == "Get")
	{
		getData(client, request);
	}
}