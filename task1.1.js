var str = prompt("Enter str");
console.log(str);
var counter = 0;

for( var i in str){
	if(str[i] == "("){
		counter++;
	}
		if(str[i] == ")"){
			counter--;
		}
}
if(counter == 0){
	consolole.log("Success");
}
if(counter!=0){
	consolole.log("Failure");
}

