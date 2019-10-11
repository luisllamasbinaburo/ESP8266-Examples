#include <ESP8266WiFi.h>
#include <ESPAsyncWebServer.h>
#include <FS.h>
#include <WebSocketsServer.h>

#include "config.h"  // Sustituir con datos de vuestra red
#include "WebSockets.hpp"
#include "Server.hpp"
#include "ESP8266_Utils.hpp"
#include "ESP8266_Utils_WS.hpp"

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
	webSocket.loop();
	
	// Ejemplo 2, llamada desde servidor
	String message = GetMillis();
	webSocket.broadcastTXT(message);
}
