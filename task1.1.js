var str = prompt("Enter str");
document.write(str+" ");
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
	document.write("the brackets are correctly");
}
if(counter!=0){
	document.write("the brackets are ircorrectly");
}

