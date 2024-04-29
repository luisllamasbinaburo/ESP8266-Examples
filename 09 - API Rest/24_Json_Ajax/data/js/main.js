function sendData()
{
  var xhttp = new XMLHttpRequest();

  let ledNumber = document.getElementById('ledNumber');
  let ledStatus = document.querySelector('input[name="status"]:checked');
  let ledData = {
	  id: ledNumber.value,
	  status: ledStatus.value
  }
  let data = JSON.stringify(ledData);

  xhttp.addEventListener('load', function(event) {
    console.log('OK', xhttp);
  });

  xhttp.addEventListener('error', function(event) {
    console.log('error', xhttp);
  });

  xhttp.open('POST', 'LED');
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(data);
}

function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == XMLHttpRequest.DONE) {
           if (xhttp.status == 200) {
			  console.log((xhttp.responseText));
			  let json = JSON.parse(xhttp.responseText);
              console.log();
			  
			  let receivedMsg = 'Received: GPIO ' + json.id + ' ' + (json.status == 1 ? "ON" : "OFF");
			  document.getElementById('receivedText').textContent = receivedMsg;
           }
           else {
              console.log('error', xhttp);
           }
        }
    };

    xhttp.open("GET", "LED", true);
    xhttp.send();
}