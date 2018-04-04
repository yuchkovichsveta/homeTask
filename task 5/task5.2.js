var div = document.getElementById('idClock');

var spanText = document.createElement("spanText");
div.appendChild(spanText);

var spanH = document.createElement("spanH");
div.appendChild(spanH);

var spanH = document.createElement("spanH");
div.appendChild(spanH);

var spanM = document.createElement("spanM");
div.appendChild(spanM);

var spanS = document.createElement("spanS");
div.appendChild(spanS);


setInterval(function() {
    spanText.style.color = "#4682B4";
    spanText.innerHTML = " Rest minutes until the end is ";
    var restSeconds = (60 - new Date().getSeconds()) - 1;
    var restMinuts = (60 - new Date().getMinutes()) - 1;
    var restHours = (24 - new Date().getHours()) - 1;
        restSeconds = (restSeconds < 10) ? '0' + restSeconds : restSeconds;
        restMinuts = (restMinuts < 10) ? '0' + restMinuts : restMinuts;
    	restHours = (restHours < 10) ? '0' + restHours : restHours;

    div.style.backgroundColor = "#98FB98";
    div.style.color = "#4682B4";

    if(restSeconds % 2 == 0){
        spanM.style.backgroundColor = "#98FB98";
        spanM.style.color = "#4682B4";
        spanS.style.backgroundColor = "#4682B4";
        spanS.style.color = "#98FB98";

        spanH.innerHTML = restHours + " : " ;
        spanM.innerHTML = restMinuts + " " ;
        spanS.innerHTML = restSeconds + " ";
    }
     if(restSeconds % 2 == 1){
        spanS.style.backgroundColor = "#98FB98";
        spanS.style.color = "#4682B4";
        spanM.style.backgroundColor = "#4682B4";
        spanM.style.color = "#98FB98";

     	spanH.innerHTML = restHours + " : ";
        spanM.innerHTML = restMinuts + " ";
        spanS.innerHTML = restSeconds;
    }
     
    if(restHours == 0 & restMinuts == 0 & restSeconds == 0){
     	clearInterval();
    }
}, 1000);
          



