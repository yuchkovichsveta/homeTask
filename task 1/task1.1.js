var str = prompt("Enter str");
var counter = 0;

document.write(str + "; ");

for (var i in str) {
	if (str[i] == "(") {
		counter++;
	}
		if (str[i] == ")") {
			counter--;
		}
}
if (counter == 0) {
	document.write("the brackets are correct");
}
if (counter != 0) {
	document.write("the brackets are ircorrect");
}

