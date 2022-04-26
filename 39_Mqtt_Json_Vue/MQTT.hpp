
const char* MQTT_BROKER_ADRESS = "192.168.1.150";
const uint16_t MQTT_PORT = 1883;
const char* MQTT_CLIENT_NAME = "ESP8266Client_1";

WiFiClient espClient;
PubSubClient mqttClient(espClient);


String GetPayloadContent(uint8_t *data, size_t len)
{
  String content = "";
  for (size_t i = 0; i < len; i++) {
    content .concat((char)data[i]);
  }
  return content;
}


void SuscribeMqtt()
{
	mqttClient.subscribe("hello/world");
}

void PublisMqtt()
{
	String payload = "";

   // obtendríamos datos de GPIO, estado...
   StaticJsonDocument<300> jsonDoc;
   jsonDoc["id"] = random(0,10);
   jsonDoc["status"] = random(0,2);
   serializeJson(jsonDoc, payload);

	mqttClient.publish("hello/world", (char*)payload.c_str());
}

void OnMqttReceived(char* topic, byte* payload, unsigned int length) 
{
	Serial.print("Received on ");
	Serial.print(topic);
	Serial.print(": ");

	String content = GetPayloadContent(payload, length);	

	StaticJsonDocument<200> doc;
	DeserializationError error = deserializeJson(doc, content);
	if (error) return;
 
	int id = doc["id"];
	bool ledStatus = doc["status"];

	Serial.print(" Id:");
	Serial.print(id);
	Serial.print(" Status:");
	Serial.println(ledStatus);
}

