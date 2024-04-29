AsyncWebServer server(80);

void homeRequest(AsyncWebServerRequest *request) {
  request->send(200, "text/plain", "Hello, world");
}

void notFound(AsyncWebServerRequest *request) {
	request->send(404, "text/plain", "Not found");
}

void InitServer()
{
	server.on("/", HTTP_GET, homeRequest);
	server.on("/item", HTTP_GET, getRequest);
	server.on("/item", HTTP_POST, [](AsyncWebServerRequest * request){}, NULL, postRequest);
	server.on("/item", HTTP_PUT, [](AsyncWebServerRequest * request){}, NULL, putRequest);
	server.on("/item", HTTP_PATCH, [](AsyncWebServerRequest * request){}, NULL, patchRequest);
	server.on("/item", HTTP_DELETE, deleteRequest);
	
	server.onNotFound(notFound);

	server.begin();
    Serial.println("HTTP server started");
}