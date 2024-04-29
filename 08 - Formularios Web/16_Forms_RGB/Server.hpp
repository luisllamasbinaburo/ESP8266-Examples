AsyncWebServer server(80);

void handleFormLed(AsyncWebServerRequest *request)
{
	String rgb = request->arg("rgb");

	uint8_t red = 0;
	uint8_t green = 0;
	uint8_t blue = 0;

	ColorConverter::HexToRgb(rgb, red, green, blue);

	Serial.println(red);
	Serial.println(green);
	Serial.println(blue);

	request->redirect("/");
}

void InitServer()
{
	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.on("/RGB", HTTP_POST, handleFormLed);

	server.onNotFound([](AsyncWebServerRequest *request) {
		request->send(400, "text/plain", "Not found");
	});

	server.begin();
	Serial.println("HTTP server started");
}