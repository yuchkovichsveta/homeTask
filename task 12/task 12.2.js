//var button = document.getElementById("idButton");
var button = document.getElementById("idBut");
  
button.addEventListener('click', function(e) {
  //var path = "http://localhost/12/" + document.getElementById("idInput").value;
  var xhr = new XMLHttpRequest;
  xhr.open("GET", "http://localhost/12/"+document.getElementById("idInput").value, true);
  var div = document.getElementById("app").appendChild(document.createElement("div")); 
  div.innerHTML = "downloading";

  xhr.onload = function() {
     // div.innerHTML = this.responseText;
      div.innerHTML = this.responseText;
     

  }

  xhr.send(null);
})

