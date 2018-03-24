var x = prompt("Enter x"),
	P = prompt("Enter P");
	x = +x;
	P = +P;
var	arr = new Array(P);
var result=0;

function getRandomCoeff() {
	for(var i = 0 ; i < P ; i++){
		arr[i] = Math.round(Math.random() * 20) + 10;
		//console.log(arr[i]);
	}
 	return arr;
}

function makePolinom(x,arr){
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		result += arr[i] * Math.pow(x,i); 
	}
	return result;
}
 arr = getRandomCoeff();
 console.log(arr);

 result = makePolinom(x,arr);
 console.log(result);
 document.write("Polynom coefficients: "+arr+";");
 document.write("Polynom value="+result);


