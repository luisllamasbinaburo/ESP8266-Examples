var myDiv = document.getElementById('counterDiv');

function updateCounterUI(counter)
{
	myDiv.innerHTML = counter; 
}

function ajaxCall() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
              updateCounterUI(xmlhttp.responseText);
           }
           else {
              console.log('error', xmlhttp);
           }
        }
    };

    xmlhttp.open("GET", "GetMillis", true);
    xmlhttp.send();
}

(function scheduleAjax() {
    ajaxCall();
    setTimeout(scheduleAjax, 1000);
})();
