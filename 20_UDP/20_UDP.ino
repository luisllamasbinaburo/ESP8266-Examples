#include <ESP8266WiFi.h>
#include <WiFiUDP.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "UDP.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_UDP.hpp"

void setup() 
{
	Serial.begin(115200);

	ConnectWiFi_STA();
	ConnectUDP();
}

void loop() 
{
	GetUDP_Packet();
	
	//SendUDP_Packet("abcde");
}

