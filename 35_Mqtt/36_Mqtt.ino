#include <ESP8266WiFi.h>
#include <PubSubClient.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "MQTT.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_MQTT.hpp"


void setup(void)
{
	Serial.begin(115200);
	SPIFFS.begin();

	ConnectWiFi_STA(true);

	InitMqtt();
}


void loop()
{
	HandleMqtt();

	PublisMqtt(millis());

	delay(1000);
}


