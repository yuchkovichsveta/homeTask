
var phStr1 = "+375 29 300-20-20";
var phStr2 = "35(29)300-20-20";
var phStr3 = "+37544 23120 20";
var phStr4 = "+533 3002020";
// phStr1 = +prompt("Enter phoneNumber");
// phStr2 = +prompt("Enter phoneNumber2");

var refExp = /\s*\+?375[\s ]?(\(?29\)?)|(\(?3{2}\)?)|(\(?4{2}\)?)[\s ]?\d{3}[\s- ]?\d{2}/;
//var refExp = /\+?3{1}7{1}5{1}[\s(]?29|3{2}|4{2}[)\s]?\d{3}[\s-]?\d{2}/;

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

if (refExp.test(phStr3)){
	document.write(phStr3 + " is a correct phone Number  <br \/>");
}

else {
	document.write(phStr3 + " is a ircorrect phone Number  <br \/>");
}
if (refExp.test(phStr4)){
	document.write(phStr4 + " is a correct phone Number  <br \/>");
}

else {
	document.write(phStr4 + " is a ircorrect phone Number  <br \/>");
}