ESP8266WebServer server(80);

// Ejemplo 1
/*void handleRoot() {
  String response = MAIN_page;
  server.send(200, "text/html", MAIN_page);
}*/

// Ejemplo 2
void handleRoot() {
	String response = ledStatus ? "ON" : "OFF";

	server.setContentLength(sizeof(HTML_PART_1) + sizeof(response) + sizeof(HTML_PART_2));
	server.send(200, "text/html", HTML_PART_1);
	server.sendContent(response);
	server.sendContent(HTML_PART_2);
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
