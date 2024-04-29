var connection = new WebSocket('ws://' + location.hostname + '/ws', ['arduino']);

connection.onopen = function () {
	console.log('Connected: ');
};

connection.onerror = function (error) {
  console.log('WebSocket Error ', error);
};

connection.onmessage = function (e) {
  console.log('Server: ', e.data);
  processData(e.data);
};

connection.onclose = function () {
  console.log('WebSocket connection closed');
};

function sendData()
{
  let ledNumber = document.getElementById('ledNumber');
  let ledStatus = document.querySelector('input[name="status"]:checked');
 
  let data = {
	  command : "Set",
	  id: ledNumber.value,
	  status: ledStatus.value
  }
  let json = JSON.stringify(data);

  connection.send(json);
}

function getData()
{
  let data = {
	  command : "Get"
  }
  let json = JSON.stringify(data);

  connection.send(json);
}

function processData(data)
{
  let json = JSON.parse(data); 
  console.log(json);
  let receivedMsg = 'Received: GPIO ' + json.id + ' ' + (json.status == 1 ? "ON" : "OFF");
  document.getElementById('receivedText').textContent = receivedMsg;
}