const char *MQTT_BROKER_ADRESS = "192.168.1.150";
const uint16_t MQTT_PORT = 1883;
const char *MQTT_CLIENT_NAME = "ESP8266Client_1";

WiFiClient espClient;
PubSubClient mqttClient(espClient);

String GetPayloadContent(uint8_t *data, size_t len)
{
	String content = "";
	for (size_t i = 0; i < len; i++)
	{
		content.concat((char)data[i]);
	}
	return content;
}

void SuscribeMqtt()
{
	mqttClient.subscribe("device/0/#");
}

void updateGPIO(String input, bool value)
{
	String payload;
	StaticJsonDocument<300> doc;
	doc["command"] = "updateGPIO";
	doc["id"] = input;
	doc["status"] = value;
	serializeJson(doc, payload);

	mqttClient.publish("device/0/GPIO", (char *)payload.c_str());

	Serial.print(input);
	Serial.println(value ? String(" ON") : String(" OFF"));
}

void OnMqttReceived(char *topic, byte *payload, unsigned int length)
{
  String content = GetPayloadContent(payload, length);
	Serial.print("Received on ");
	Serial.print(topic);
	Serial.print(": ");
  Serial.println(content);
  
	StaticJsonDocument<200> doc;
	DeserializationError error = deserializeJson(doc, content);
	if (error) { return; }

	String command = doc["command"];
	if (content.indexOf("GPIO") > 0 && command == "setGPIO")
		setGPIO(doc["id"], (bool)doc["status"]);
	else if (content.indexOf("PWM") > 0 && command == "setPWM")
		setPWM(doc["id"], (int)doc["pwm"]);
	else if (content.indexOf("Action") > 0 && command == "doAction")
		doAction(doc["id"]);
  else
    
}
