var n, X, arcsin;
X=prompt("Enter a number from -1 to 1");
n=prompt("Enter n > 0");
arcsin=0;
function factorial(a){
	if (a==0 || a==1) {
		return 1;
	} 
	else {
		return a*factorial(a-1);
	} 
}

if (isNaN(Number(X))||isNaN(Number(n))||(Math.abs(Number(X))>1)||(Number(n)<=0)||X==''||X==null||n==''||n==null) {
	document.write("You entered incorrect data");

} 
else {
	X=Number(X);
	n=Number(n);
	for (var i = 0; i<=n; i++) {
		arcsin+=(factorial(2*i) / (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2*i+1))) * Math.pow(X, 2*i+1)
	}
	document.write("arcsin "+X+" = "+arcsin);

}