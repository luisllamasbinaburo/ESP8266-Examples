#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <FS.h>   // Include the SPIFFS library
 
#include "config.h"  // Sustituir con datos de vuestra red
#include "Server.hpp"
#include "ESP8266_Utils.hpp"

void setup(void)
{
  Serial.begin(115200);
  SPIFFS.begin();
  
  ConnectWiFi_STA();
  
  InitServer();
}

void loop(void)
{
  server.handleClient();
}

