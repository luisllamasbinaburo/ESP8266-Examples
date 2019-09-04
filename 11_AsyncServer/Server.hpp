AsyncWebServer server(80);

void InitServer()
{
	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.on("/hello", HTTP_GET, [](AsyncWebServerRequest *request) {
		request->send(200, "text/plain", "Hola mundo (desde ESP8266)");
	});

	server.onNotFound([](AsyncWebServerRequest *request) {
		request->send(400, "text/plain", "Not found");
	});

	server.begin();
	Serial.println("HTTP server started");
}