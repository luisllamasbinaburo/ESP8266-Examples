#include <ESP8266WiFi.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

#include "config.h" // Sustituir con datos de vuestra red
#include "API.hpp"
#include "MQTT.hpp"
#include "Server.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_MQTT.hpp"
#include "ReactiveArduinoLib.h"

auto obsD0 = Reactive::FromDigitalInput(D0);
auto obsD5 = Reactive::FromDigitalInput(D5);
auto obsD6 = Reactive::FromDigitalInput(D6);
auto obsD7 = Reactive::FromDigitalInput(D7);

void setup(void)
{
	Serial.begin(115200);
	SPIFFS.begin();

	ConnectWiFi_STA(true);

	InitServer();
	InitMqtt();

	obsD0.Distinct().Do([](int i) { updateGPIO("D0", i); });
	obsD5.Distinct().Do([](int i) { updateGPIO("D5", i); });
	obsD6.Distinct().Do([](int i) { updateGPIO("D6", i); });
	obsD7.Distinct().Do([](int i) { updateGPIO("D7", i); });
}

void loop()
{
	HandleMqtt();

	obsD0.Next();
	obsD5.Next();
	obsD6.Next();
	obsD7.Next();
}
