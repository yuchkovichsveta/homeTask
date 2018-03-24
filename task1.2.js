var x = prompt("Enter |x|<1");
var N = prompt("Enter N>=0");
var sum = 0;

x = Number(x);
N = Number(N);

function factorial(n){
  if (n==0 || n==1) {
    return 1;
  } 
  else {
    return n*factorial(n-1);
  } 
}

x = Number(x);
N = Number(N);
  for (var i = 0; i<=N; i++) {
     sum += (factorial(2*i) / (Math.pow(4, i) * Math.pow(factorial(i), 2) * (2*i+1))) * Math.pow(x, 2*i+1)
  }
document.write("arcsin = "+sum);




