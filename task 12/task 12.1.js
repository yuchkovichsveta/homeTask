var table = document.getElementById("table");

  window.addEventListener("load", function(event) {
    var xhr = new XMLHttpRequest;
	xhr.open("GET", "number.txt", true);
	xhr.onload = function() {
		var N = this.responseText;
		var  row, cell;
    	table = document.getElementById("table").appendChild(document.createElement("table"));


   		 for( var i = 0; i < N; i++) {
        	row = table.insertRow(i);

        	for( var j = 0; j < N; j++) {
            	if ( i == 0 ) {
               		 cell = row.appendChild(document.createElement("th"));
                	cell.innerHTML = (j != 0) ? j + 1 : " ";
           		 }
           		 else {
                	if (j == 0) {
                   		 cell = row.appendChild(document.createElement("th"));
                    	cell.innerHTML = i+1;}
               		 else {
                  		cell = row.insertCell(j);
                   		if (i == j) {
                        	cell.style.color = "red";
                    	}
                    	cell.innerHTML = ( j + 1 ) * ( i + 1 );
                	}
            	}
        	}
    };
		
	}

	xhr.send(null);
  });

