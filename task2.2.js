var x = prompt("Enter x"),
	P = prompt("Enter Number P");
	x = +x;
	P = +P;
var	arr = new Array(P);
var result = 0;

function getRandomCoeff() {
	for(var i = 0 ; i < P ; i++) {
		arr[i] = Math.round(Math.random() * 20) + 10;
	}

 	return arr;
}

function makePolinom(x, arr) {
	var result = 0;

	for (var i = 0; i < arr.length; i++) {
		result += arr[i] * Math.pow(x, i); 
	}

	return result;
}

 arr = getRandomCoeff();
 result = makePolinom(x, arr);

 document.write("Polynom coefficients: " + arr + ";");
 document.write("Polynom value=" + result);


