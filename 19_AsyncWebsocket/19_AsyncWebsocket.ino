#include <ESP8266WiFi.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <WebSocketsServer.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "Websocket.hpp"
#include "Server.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_AWS.hpp"

void setup(void)
{
	Serial.begin(115200);
	SPIFFS.begin();
	
	ConnectWiFi_STA();

	InitWebSockets();
	InitServer();
}

void loop(void)
{
	// Ejemplo 2, llamada desde servidor
	ws.textAll(GetMillis());
}
