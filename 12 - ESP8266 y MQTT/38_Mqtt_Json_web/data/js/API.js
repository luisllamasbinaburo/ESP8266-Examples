function onConnect() {

    var options = {
      qos: 0,
      onSuccess: onSubSuccess,
      onFailure: onSubFailure
    };
    client.subscribe('hello/world', options);
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
    var payload = message.payloadString;
  
    let json = JSON.parse(payload);
  
    var element = document.getElementById('app');
    var newElement = document.createElement('div');
    newElement.appendChild(document.createTextNode(json.data));
    element.appendChild(newElement);
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