function onConnect() {
  var options = {
    qos: 0,
    onSuccess: onSubSuccess,
    onFailure: onSubFailure
  };
  client.subscribe('device/0/#', options);
}

function onFailure(message) {
  console.log(message)
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log(message)
  var topic = message.destinationName;
  var json = message.payloadString;

  let payload = JSON.parse(json);
  console.log(payload)
  if(payload.command.includes("updateGPIO"))
  {
    let gpio = app.gpio_input_list.find(gpio => gpio.text == payload.id);
    gpio.status = payload.status;
  }
}

function onSubFailure(message) {
  console.log(message)
}

function onSubSuccess(message) {
  console.log(message)
}

function createGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}