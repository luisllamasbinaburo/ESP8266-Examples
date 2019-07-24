#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
 
ESP8266WebServer server(80);
 
#include "config.h"  // Sustituir con datos de vuestra red
#include "ESP8266_Utils.hpp"
#include "Server.hpp"

void setup(void) 
{
   Serial.begin(115200);

   ConnectWiFi_STA();
   
   InitServer();
}
 
void loop()
{
   server.handleClient();
}