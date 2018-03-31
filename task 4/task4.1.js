
var infoBrowserNames = [ "location.protocol", "location.href", "screen.width", "screen.height", "screen.colorDepth", "screen.avoidWidth", "screen.availHeight",
	"navigator.appCodeName", "navigator.appName", "navigator.cookieEnabled", "navigator.userAgent" ];

var infoBrowserValues = [ location.protocol, location.href, screen.availWidth, screen.availHeight,
	screen.width, screen.height, navigator.appCodeName, navigator.appName, navigator.cookieEnabled, navigator.userAgent];


document.write("<table> <tr> <th> <span class = caption> infoBrowserNames </span> </th> <th> <span class = caption> infoBrowserValues </span> </th></tr>"); //document.write(infoBrowserNames + "<br \/>");

for (var i = 0; i < infoBrowserNames.length; i++) {
	document.write("<tr> <th>" + infoBrowserNames[i] + "</th> <th>" +  infoBrowserValues[i] + "</th></tr>"); //document.write(infoBrowserNames + "<br \/>");
}
 document.write("</table>");