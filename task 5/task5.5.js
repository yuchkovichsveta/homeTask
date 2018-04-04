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


console.log(eratosthenes(n));


 /*
N = 100;
for( var p = 2; p < N; p++) {
	for (var k = 2 * p; k < N; k += p) {
    	cell.innerHTML = "  ";
    }
}*/

 /*

 function sieve(n){
	S = []; 
	S[1] = 0; // 1 - не простое число
	// заполняем решето единицами
	for(k=2; k<=n; k++)
		S[k]=1;
	
	for(k=2; k*k<=n; k++){
		// если k - простое (не вычеркнуто)
		if(S[k]==1){ 
			// то вычеркнем кратные k
			for(l=k*k; l<=n; l+=k){
				S[l]=0;
				}
			}
	}
	return S;
}*/
