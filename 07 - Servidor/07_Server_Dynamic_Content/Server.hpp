ESP8266WebServer server(80);

void handleRoot() {
   String response = "LED: ";
   response.concat(ledStatus ? "OFF" : "ON");
  
   server.send(200, "text/plain", response);
}

void handleNotFound() {
	server.send(404, "text/plain", "Not found");
}

void InitServer()
{
   server.on("/", handleRoot);
   server.onNotFound(handleNotFound);
   server.begin();
   Serial.println("HTTP server started");
}