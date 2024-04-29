client = new Paho.MQTT.Client("192.168.1.150", 9001, createGuid())

var options = {
  onSuccess: onConnect,
  onFailure: onFailure
};

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect(options);