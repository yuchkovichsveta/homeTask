var now = new Date(),
    tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

function getMinutesToTomorrow() {
	
    var	diffrencMill = tomorrow - now,
        diffrencMin = diffrencMill / 6000;

     return Math.round(diffrencMin);
}
	
document.write("Current Date: " + now + ";");
document.write("Tommorow Date:" + tomorrow);
document.write("Minutes to Tomorrow = " + getMinutesToTomorrow() );


