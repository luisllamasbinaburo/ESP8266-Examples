#include <ESP8266WiFi.h>
 
#include "config.h"  // Sustituir con datos de vuestra red
#include "ESP8266_Utils.hpp"
 
void setup() 
{
  Serial.begin(115200);
  
  ConnectWiFi_AP();
}
 
void loop() 
{ 
}
