//var n = 100;

var n = +prompt("Enter Number n", 100);



var eratosthenes = function(n) {
	var row, cell;	
	var table = document.getElementById("tab").appendChild(document.createElement("table"));
	var tBody = table.appendChild(document.createElement("tBody"));
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 1 to n
    for (var i = 1; i < n; i++) {
        row = tBody.appendChild(document.createElement("tr"));
		for( var j = 0; j < n/10; j++) {
			array.push(true);
			cell = row.appendChild(document.createElement("td"));
			cell.innerHTML = i++;
		}
		--i;	

    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
                //table.row[i].cell[j].style.color = red;
            }
        }

    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

var div = document.getElementById("tab").appendChild(document.createElement("div"));
div.innerHTML = "prime numbers: <br>" + eratosthenes(n);
