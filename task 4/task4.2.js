var phStr0 = +prompt("Enter your phoneNumber");
var phStr1 = "  +375 44 370 2030";
var phStr2 = " 37329300-20-20";
var phStr3 = "+373 (25)233 14 20";
var phStr4 = "  +375 29 3003390";
var phArr = [phStr1, phStr2, phStr3, phStr4];

var regExp = /^\s*\+?375([\s]?((29|33|44)|(\((44|29|33)\)))[\s]?)\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;


document.write(" Info about your phoneNumber: <br \/>");

if (regExp.test(phStr0)) {
	document.write("your phoneNumber: " + phStr0 + " is correct <br \/>");
}

else {
	document.write("your phoneNumber: " + phStr0 + " is ircorrect <br \/>");
}


document.write(" <br \/> My tests of phoneNumbers: <br \/>");

for (var i = 0; i < phArr.length; i++) {
	if (regExp.test(phArr[i])) {
	 	document.write("phoneNumber: " + phArr[i]+ " is correct <br \/>");
	}
	else {
		document.write("phoneNumber: " + phArr[i] + " is ircorrect <br \/>");
	}
}
