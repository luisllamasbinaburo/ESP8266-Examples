#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

String url = "http://www.google.com";
 
#include "config.h"  // Sustituir con datos de vuestra red
#include "Client.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_Client.hpp"
 
void setup()
{
   Serial.begin(115200);
 
   ConnectWiFi_STA();
}
 
void loop()
{
   ClientRequest();
 
   delay(30000);
}
