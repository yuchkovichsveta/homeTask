var table = document.getElementById("tab").appendChild(document.createElement("table"));
var tbody = table.appendChild(document.createElement("tbody"));

//var N = 5;
var N = +prompt("Enter N", 5);

function createTable(N) {
	for( var i = 0; i < N; i++) {
		var tr = document.createElement("tr");
		tbody.appendChild(tr);

		for (var j = 0; j < N; j++) {
			var td = document.createElement("td");
			td.innerHTML = j;
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
}
createTable(N);

var selectedTd;

table.addEventListener("mouseover", function(event) {
    var target = event.target;

    while (target != this) {
        if (target.tagName == 'TD') {
          setRandomColor(target);
          return;
        }

        target = target.parentNode;
      }
    
});

table.addEventListener("mouseout", function(event) {
    var target = event.target;

    while (target != this) {
        if (target.tagName == 'TD') {
        	selectedTd = target;
      		selectedTd.style.backgroundColor = "grey";
          	return;
        }
        target = target.parentNode;
      }
    });

    
   function  setRandomColor(node) {
   		var color = '#' + Math.floor(Math.random()*16777215).toString(16)
   		selectedTd = node;
    	if (selectedTd) {
    		selectedTd.style.backgroundColor = color;
     	 }
    }
