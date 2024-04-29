var myDiv = document.getElementById('counterDiv');

function updateCounterUI(counter)
{
	myDiv.innerHTML = counter; 
}

var connection = new WebSocket('ws://' + location.hostname + '/ws', ['arduino']);

connection.onopen = function () {
	console.log('Connected: ');
	
	// Ejemplo 1, peticion desde cliente
	//(function scheduleRequest() {
	//	connection.send("");
	//	setTimeout(scheduleRequest, 100);
	//})();
};

connection.onerror = function (error) {
  console.log('WebSocket Error ', error);
};

connection.onmessage = function (e) {
  updateCounterUI(e.data);
  console.log('Server: ', e.data);
};

connection.onclose = function () {
  console.log('WebSocket connection closed');
};

