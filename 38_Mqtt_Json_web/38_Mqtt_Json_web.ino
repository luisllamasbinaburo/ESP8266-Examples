#include <ESP8266WiFi.h>
#include <FS.h>
#include <ESPAsyncWebServer.h>
#include <AsyncMqttClient.h>
#include <ArduinoJson.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "Server.hpp"
#include "MQTT.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_MQTT.hpp"

void setup(void)
{
	Serial.begin(115200);
	SPIFFS.begin();

	delay(500);

	WiFi.onEvent(WiFiEvent);
	InitMqtt();

	ConnectWiFi_STA();
	InitServer();
}

void loop()
{
	PublishMqtt();

	delay(1000);
}