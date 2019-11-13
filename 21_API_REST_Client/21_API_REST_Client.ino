#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "API.hpp"
#include "ESP8266_Utils.hpp"

void setup() 
{
	Serial.begin(115200);
  
 	ConnectWiFi_STA();
	
	GetAll();
	GetItem(1);
	GetQuery("ABC");
	Create("New item");
	ReplaceById(2, "New item");
    UpdateById(2, "New item");
	DeleteById(5);
}

void loop() 
{
}

