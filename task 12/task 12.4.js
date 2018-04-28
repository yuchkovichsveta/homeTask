var container = document.getElementById("container");

var button = document.getElementById("idBut");
  

var routes = {
   "#task1":{
      path: "task12.4/task1.html"
   },
    "#task2":{
      path: "task12.4/task2.html"
   },
    "#task3":{
      path: "task12.4/task3.html"
   },
   "#task4":{
      path: "task12.4/task4.html"
   }
}  

var doRoute = function (){
  var hash = location.hash;
  if(typeof routes[hash] == "object"){
    var path = routes[hash].path;
    var xhr = new XMLHttpRequest;
    xhr.open("GET", path, true);
    xhr.onload = function(){
      container.innerHTML = this.responseText;
    };
    xhr.send();
  }
}

window.addEventListener("hashchange", doRoute);
doRoute();


