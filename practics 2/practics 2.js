var arr = [], box, ei,ej;	

window.onload = function() {				
	box = document.getElementById("box");

	document.getElementById("reset").addEventListener('click', function(event) {
		resetGame();
}	
);					


function shift(arr,i1,j1,i2,j2) {				
	t = arr[i1][j1];
	arr[i1][j1] = arr[i2][j2];
	arr[i2][j2] = t;
}


function resetGame(){
	for(let i = 0; i < 4; ++i ) {
			arr[i] = [];

			for(j = 0; j < 4; ++j) {
				if (i + j != 6) {
					arr[i][j] = i*4 + j + 1;
				}
				else {
					arr[i][j] = "";
				}
			}
		}
		ei = 3;
   		ej = 3;

		for(i = 0; i < 160; ++i) {//настраиваем степень разброса
			switch(Math.round(3*Math.random())){ //replace 
				case 0: if(ei != 0) shift(arr,ei,ej,--ei,ej); break; // up
				case 1: if(ej != 3) shift(arr,ei,ej,ei, ++ej); break; // right
				case 2: if(ei != 3) shift(arr,ei,ej,++ei,ej); break; // down
				case 3: if(ej != 0) shift(arr,ei,ej,ei,--ej); // left
		 	}
		}
			

	var table = document.createElement("table"), 
		tbody = document.createElement("tbody");					
	table.appendChild(tbody);

	for(i = 0; i < 4; ++i) {
		var row = document.createElement("tr");

		for(j = 0; j < 4; ++j) {
			var cell = document.createElement("td");
				cell.id = i + " " + j;
				cell.addEventListener('click', function (event){
					clickCell(event);
				});
				cell.innerHTML = arr[i][j];
				row.appendChild(cell);
		}

		tbody.appendChild(row);					
	}
	if(box.childNodes.length == 1)
		box.removeChild(box.firstChild);	
	box.appendChild(table);	
}

function clickCell(event) {
	var event = event || window.event,
		el = event.srcElement || event.target,
		i = el.id.charAt(0),
		j = el.id.charAt(2);

	if((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)) {

		document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
		el.innerHTML = "";
		ei = i;
		ej = j;

		var result = true;

		for(i = 0; i < 4; ++i)
			for(j = 0; j < 4; ++j)
				if(i + j != 6 && document.getElementById(i + " " + j).innerHTML != i*4 + j + 1){
					result = false;
					break;
				}
				if(result) alert("You win!");
			}
 }
}