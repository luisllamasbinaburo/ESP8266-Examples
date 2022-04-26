#include <ESP8266WiFi.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "MQTT.hpp"
#include "Server.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_MQTT.hpp"

void setup(void)
{
	Serial.begin(115200);
	SPIFFS.begin();

	ConnectWiFi_STA(true);

	InitServer();

	InitMqtt();
}


void loop()
{
	HandleMqtt();

	PublisMqtt();

	delay(1000);
}
