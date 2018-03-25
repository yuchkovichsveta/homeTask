var N = prompt("Enter N"),
	s = prompt("Enter s"),
	p = prompt("Enter p"),
   
	sum = 0,
	arr = new Array(N),
	arrRevers = new Array(N);

	N = Number(N);
	s = Number(s);
	p = Number(p);

var max = s + 0.01 * p * s,
    min = s - 0.01 * p * s;

function getRandomArr(min, max) {
	for(var i = 0 ; i < N ; i++) {
		arr[i] = Number(Math.round(Math.random() * (max - min)) + min).toFixed(2);
	}

 	return arr;
}

function getReversArr(arr) {
	for(var i = 0; i < N; i++) {
		arrRevers[i] = Number((1/arr[i]).toFixed(2));
	}

 	return arrRevers;
}

function sumElementsOfArr(arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function averageHarm(arrRevers) {
	var average = arrRevers.length / sumElementsOfArr(arrRevers);

	return average;
}

arr = getRandomArr(min,max);
arrRevers = getReversArr(arr); 
sum = sumElementsOfArr(arrRevers);

document.write("Array:" + arr + "; ");
document.write(" Average harmonic = " + Number(averageHarm(arrRevers)).toFixed(2));







