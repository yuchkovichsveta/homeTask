var N = +prompt("Enter N");
var arr = Array(N).fill(0); 
	
document.write("N: " + N + ";");

//function showArr(arr) {
	for(var i = 0; i < N; i++) {
		document.write("Arr: " + arr[i] + ";");

	}
 	//return arrRevers;
//}

//showArr(arr);

var arrNew;

//function setRandomArr(arr) {
	arrNew = arr.map (function(e) {
		return  Math.round(Math.random() * 100) + 1;
	})
//}

//function setRemaindArr(arr) {
	arrNew = arrNew.map (function(e) {
		
		return  e % 17;
	})
//}

//function setReduceArr(arr) {
	//console.log(arr);
	arrNew = arrNew.filter (function(e) {
		return  (e != 0) && (e != 7);
	})
	console.log(arrNew);

	arrNew = arrNew.sort (function(a, b) {
		return  (a%6) > (b%6) ? 1 : -1;
	})
	console.log(arrNew);
//}

//setRandomArr(arr);
//showArr(arrNew);

//setRemaindArr(arrNew);
//showArr(arrNew);

//setReduceArr(arrNew);
//showArr(arrNew);


