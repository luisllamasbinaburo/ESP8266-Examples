#include <ESP8266WiFi.h>
#include <ESP8266mDNS.h>
 
#include "config.h"  // Sustituir con datos de vuestra red
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_mDNS.hpp"
 
void setup()
{
   Serial.begin(115200);

   ConnectWiFi_STA();
   
   InitMDNS();
}
 
void loop()
{
}