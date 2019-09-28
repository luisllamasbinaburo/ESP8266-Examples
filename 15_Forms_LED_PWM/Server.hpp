AsyncWebServer server(80);

void handleFormPWM(AsyncWebServerRequest *request)
{
 String pwmValue = request->arg("pwmValue");
 
 Serial.print("PWM:\t");
 Serial.println(pwmValue);

 analogWrite(LED_BUILTIN, 1023 - pwmValue.toInt());
 
 request->redirect("/");
}

void InitServer()
{
	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.on("/LED", HTTP_POST, handleFormPWM);

	server.onNotFound([](AsyncWebServerRequest *request) {
		request->send(400, "text/plain", "Not found");
	});

	server.begin();
    Serial.println("HTTP server started");
}
