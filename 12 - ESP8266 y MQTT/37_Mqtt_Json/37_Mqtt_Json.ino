#include <ESP8266WiFi.h>
#include <AsyncMqttClient.h>
#include <ArduinoJson.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "MQTT.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_MQTT_Async.hpp"

void setup()
{
	Serial.begin(115200);

	delay(500);

	WiFi.onEvent(WiFiEvent);
	InitMqtt();

	ConnectWiFi_STA();
}

void loop()
{
	PublishMqtt();

	delay(500);
}