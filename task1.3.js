var N1 = prompt("Enter 'Number 1'"),
    N2 = prompt("Enter 'Number 1'"),
    operation = prompt("Enter 'operation'");

var result = 0;

N1 = Number(N1);
N2 = Number(N2);
operation = String(operation);

switch(operation) {
  case '+':  
    result = N1+N2;
    break
  case '-':  
    result = N1-N2;
    break
  case '*':  
    result = N1*N2;
    break
   case '/':  
    result = N1/N2;
    break
   case '^':  
    result = N1**N2;
    break

  default: 
    break
}

document.write("Result : "+N1+operation+N2+"="+result);






