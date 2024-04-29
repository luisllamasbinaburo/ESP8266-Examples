AsyncWebServer server(80);

String GetMillis()
{
  return String(millis(), DEC);
}

void InitServer()
{
	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.on("/GetMillis", HTTP_GET, [](AsyncWebServerRequest *request) {
		request->send(200, "text/plain", GetMillis());
	});

	server.onNotFound([](AsyncWebServerRequest *request) {
		request->send(400, "text/plain", "Not found");
	});

	server.begin();
    Serial.println("HTTP server started");
}