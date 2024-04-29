void setData(AsyncWebSocketClient * client, String request)
{
  StaticJsonDocument<200> doc;
  DeserializationError error = deserializeJson(doc, request);
  if (error) { return; }

  int id = doc["id"];
  bool ledStatus = doc["status"];
  Serial.println(id);
  Serial.println(ledStatus);
}

void getData(AsyncWebSocketClient * client, String request)
{
   String response;
   StaticJsonDocument<300> jsonDoc;
   jsonDoc["id"] = random(0,10);
   jsonDoc["status"] = random(0,2);
   serializeJson(jsonDoc, response);
   
   client->text(response);
}
