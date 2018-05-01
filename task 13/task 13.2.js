var container = document.getElementById("container");
var item = document.getElementById("item");
var flag = true;
var ind = -1;

while( ind < 2 ) {
	ind++;
	scroll();
}

window.addEventListener("scroll", function(elem) {

	scroll();

	if( flag)  {
		ind++;
	}

	flag = false;
});

function makeHtml( datajson ) {
	var code = "";

	datajson.forEach( function( elem ) {
		code += "<div class='item'><h2>" + elem.name + "</h2><div>" + elem.price + " y.e. </div><div>" + elem.country + "</div><div>" + elem.colors + "</div></div>";
	});

	return code;
}


function scroll() {

	if( container.getBoundingClientRect().bottom < window.innerWidth + 150 ) {
		var xhr = new XMLHttpRequest;

		xhr.addEventListener("load", function() {
			container.firstElementChild.innerHTML += makeHtml(JSON.parse(xhr.responseText))
		});

		xhr.open("GET", "datajson/data" + (ind % 5) + ".json");
		xhr.send(null);
		flag = true;
	}
}

