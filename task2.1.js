var N = prompt("Enter N"),
	s = prompt("Enter s"),
	p = prompt("Enter p"),
    max = s+0.01*p*s,
    min = s-0.01*p*s,
	sum = 0,
	arr = new Array(N),
	arrRevers = new Array(N);

	N = Number(N);
	s = Number(s);
	p = Number(p);

//console.log(max);
//console.log(min);
function getRandomArr(min, max) {
	for(var i = 0 ; i < N ; i++){
		arr[i] = Math.round(Math.random() * (max - min)) + min;
		//console.log(arr[i]);
	}
 	return arr;
}

function getReversArr(arr) {
	for(var i = 0; i < N; i++){
		arrRevers[i] = Number(parseFloat(1/arr[i].toFixed(3)));
		console.log(arrRevers[i]);
	}
 	return arrRevers;
}

function sumElementsOfArr(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function averageHerm(arrRevers){
	var average = arrRevers.length/sumElementsOfArr(arrRevers);
	return average;
}
arr = getRandomArr(min,max);
arrRevers = getReversArr(arr); 
sum = sumElementsOfArr(arrRevers);
console.log(Math.round(averageHerm(arrRevers)));

//console.log(arr);

//console.log(arrRevers);

//console.log(sum);






