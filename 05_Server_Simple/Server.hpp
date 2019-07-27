ESP8266WebServer server(80);

// Funcion que se ejecutara en la URI '/'
void handleRoot() 
{
   server.send(200, "text/plain", "Hola mundo!");
}
 
// Funcion que se ejecutara en URI desconocida
void handleNotFound() 
{
   server.send(404, "text/plain", "Not found");
}

void InitServer()
{
   // Ruteo para '/'
   server.on("/", handleRoot);
 
   // Ruteo para '/inline' usando función lambda
   server.on("/inline", []() {
      server.send(200, "text/plain", "Esto tambien funciona");
   });
 
   // Ruteo para URI desconocida
   server.onNotFound(handleNotFound);
 
   // Iniciar servidor
   server.begin();
   Serial.println("HTTP server started");
}