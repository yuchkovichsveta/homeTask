 var boldBtn = document.getElementById("bold");
 var italicBtn = document.getElementById("italic");
 var undLineBtn = document.getElementById("undLine");
 var decoration = document.getElementById("decor");

var left = document.getElementById("left");
var right = document.getElementById("right");
var center = document.getElementById("center");


boldBtn.addEventListener("click", function(e){ // work
	document.execCommand("bold",false,null);
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

italicBtn.addEventListener("click", function(e){ // work
	document.execCommand("italic",false,null);
})


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
 })

undLineBtn.addEventListener("click", function(e){ // work
	document.execCommand("underline",false,null);
})

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
 })

decoration.addEventListener("click", function(e){ // work
	document.execCommand("strikeThrough",false,null);
})

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
 })

left.addEventListener("click", function(e){ // work
	document.execCommand("justifyleft",false,null);
})

/*
setInterval(function(){
	if(!document.queryCommandEnabled("justifyleft")) {
		left.disabled = true;
	} else {
		left.disabled = false;
	}
	if (document.queryCommandState("strikeThrough")) {
		left.style.fontWeight = "bold";
	} 
	else{
		left.style.fontWeight = "normal";
    }
 })*/

