var str = prompt("Enter str");
var counterDiffr = 0;
var counter = 0;


for( var i = 0; i < str.length; i++ ){
	if( str[i] == '(' ){
		counterDiffr++;
		counter++;
	}else if( str[i] == ')' ){
		counterDiffr--;
		counter++;
	}
	if(counterDiffr < 0) break;
}
	
if( counter == 0 ) {
	document.write("Empty");
} 
if( counterDiffr == 0 ){
	document.write(str + "has correct braces");
} 
else {
	document.write(str + "has ircorrect braces");
}

