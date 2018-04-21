 var boldBtn = document.getElementById("bold");
 var italicBtn = document.getElementById("italic");
 var undLineBtn = document.getElementById("undLine");
 var decoration = document.getElementById("decor");

var left = document.getElementById("left");
var right = document.getElementById("right");
var center = document.getElementById("center");

var link = document.getElementById("link");
var unlink = document.getElementById("unlink");


boldBtn.addEventListener("click", function(e){ // work
	document.execCommand("bold",false,null);
})

undLineBtn.addEventListener("click", function(e){ // work
	document.execCommand("underline",false,null);
})

italicBtn.addEventListener("click", function(e){ // work
	document.execCommand("italic",false,null);
})

decoration.addEventListener("click", function(e){ // work
	document.execCommand("strikeThrough",false,null);
})

left.addEventListener("click", function(e){ // work
	document.execCommand("justifyleft",false,null);
})

right.addEventListener("click", function(e){ // work
	document.execCommand("justifyright",false,null);
})

center.addEventListener("click", function(e){ // work
	document.execCommand("justifycenter",false,null);
})

link.addEventListener("click", function(e){ // work
	var mylink = prompt("Enter a URL:", "http://");
	if ((mylink != null) && (mylink != "")) {
		document.execCommand("createlink",false,mylink);
	}
	
})

unlink.addEventListener("click", function(e){ // work
	document.execCommand("unlink",false,null);
})

setInterval(function(){
	if(!document.queryCommandEnabled("bold")){
		boldBtn.disabled = true;
	} else {
		boldBtn.disabled = false;
	}
	if (document.queryCommandState("bold")){
		boldBtn.style.fontWeight = "bold";
	} else{boldBtn.style.fontWeight = "normal";
}
},100)



setInterval(function(){
	if(!document.queryCommandEnabled("italic")) {
		italicBtn.disabled = true;
	} else {
		italicBtn.disabled = false;
	}
	if (document.queryCommandState("italic")) {
		italicBtn.style.fontStyle = "italic";
	} 
	else{
		italicBtn.style.fontStyle = "normal";
    }
 },100)



setInterval(function(){
	if(!document.queryCommandEnabled("underline")) {
		undLineBtn.disabled = true;
	} else {
		undLineBtn.disabled = false;
	}
	if (document.queryCommandState("underline")) {
		undLineBtn.style.fontWeight = "bold";
		undLineBtn.style.textDecoration = "underline";
	} 
	else{
		undLineBtn.style.fontWeight = "normal";
		undLineBtn.style.textDecoration = "none";
    }
 },100)


setInterval(function(){
	if(!document.queryCommandEnabled("strikeThrough")) {
		decoration.disabled = true;
	} else {
		decoration.disabled = false;
	}
	if (document.queryCommandState("strikeThrough")) {
		decoration.style.fontWeight = "bold";
		decoration.style.textDecoration = "line-through";
	} 
	else{
		decoration.style.fontWeight = "normal";
		decoration.style.textDecoration = "none";
    }
 },100)




setInterval(function(){
	if(!document.queryCommandEnabled("justifyleft")) {
		left.disabled = true;
	} else {
		left.disabled = false;
	}
	if (document.queryCommandState("justifyleft")) {
		left.style.fontWeight = "bold";
	} 
	else{
		left.style.fontWeight = "normal";
    }
 },100)



setInterval(function(){
	if(!document.queryCommandEnabled("justifyright")) {
		right.disabled = true;
	} else {
		right.disabled = false;
	}
	if (document.queryCommandState("justifyright")) {
		right.style.fontWeight = "bold";
	} 
	else{
		right.style.fontWeight = "normal";
    }
 },100)



setInterval(function(){
	if(!document.queryCommandEnabled("justifycenter")) {
		center.disabled = true;
	} else {
		center.disabled = false;
	}
	if (document.queryCommandState("justifycenter")) {
		center.style.fontWeight = "bold";
	} 
	else{
		center.style.fontWeight = "normal";
    }
 },100)


setInterval(function(){
	if(!document.queryCommandEnabled("createlink")) {        
		   link.disabled = true;
	} else {
		link.disabled = false;
	}
	if (document.queryCommandState("createlink")) {
		link.style.fontWeight = "bold";
	} 
	else{
		link.style.fontWeight = "normal";
    }
 },100)

setInterval(function(){
	if(!document.queryCommandEnabled("unlink")) {        
		   unlink.disabled = true;
	} else {
		unlink.disabled = false;
	}
	if (document.queryCommandState("unlink")) {
		unlink.style.fontWeight = "bold";
	} 
	else{
		unlink.style.fontWeight = "normal";
    }
 },100)
