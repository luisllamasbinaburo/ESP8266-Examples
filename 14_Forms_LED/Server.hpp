AsyncWebServer server(80);

void handleFormLed(AsyncWebServerRequest *request)
{
 String ledStatus = request->arg("status");
 
 Serial.print("Status:\t");
 Serial.println(ledStatus);

 digitalWrite(LED_BUILTIN, ledStatus == "ON" ? LOW : HIGH);

 request->redirect("/");
}

void InitServer()
{
	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.on("/LED", HTTP_POST, handleFormLed);

	server.onNotFound([](AsyncWebServerRequest *request) {
		request->send(400, "text/plain", "Not found");
	});

	server.begin();
    Serial.println("HTTP server started");
}
