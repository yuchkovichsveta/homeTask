
var phStr1 = "+375 29 300-20-20";
var phStr2 = "+375(29)300-20-20";
var phStr2 = "+37544300 20 20";
var phStr2 = "+37533 3002020";
// phStr1 = +prompt("Enter phoneNumber");
// phStr2 = +prompt("Enter phoneNumber2");

var refExp = /\+?375[\s(]?29|3{2}|4{2}[)\s]?\d{3}[\s-]?\d{2}/;

//var equality = false;

if (refExp.test(phStr1)){
	document.write(phStr1 + " is a correct phone Number  <br \/>");
}

else {
	document.write(phStr1 + " is a ircorrect phone Number  <br \/>");
}

if (refExp.test(phStr2)){
	document.write(phStr2 + " is a correct phone Number  <br \/>");
}

else {
	document.write(phStr2 + " is a ircorrect phone Number  <br \/>");
}