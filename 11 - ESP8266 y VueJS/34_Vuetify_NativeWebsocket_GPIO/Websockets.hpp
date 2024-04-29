AsyncWebSocket ws("/ws");

void ProcessRequest(AsyncWebSocketClient *client, String request)
{
  StaticJsonDocument<200> doc;
  DeserializationError error = deserializeJson(doc, request);
  if (error) { return; }
  
  String command = doc["command"];
  if(command == "setGPIO") 
    setGPIO(doc["id"], (bool)doc["status"]);
  else if(command == "setPWM")
    setPWM(doc["id"], (int)doc["pwm"]);
  else if(command == "doAction")
    doAction(doc["id"]);
}


void updateGPIO(String input, bool value)
{
  String response;
  StaticJsonDocument<300> doc;
  doc["command"] = "updateGPIO";
  doc["id"] = input;
  doc["status"] = value;
  serializeJson(doc, response);

  ws.textAll(response);

  Serial.print(input);
  Serial.println(value ? String(" ON") : String(" OFF"));
}

