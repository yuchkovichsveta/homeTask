var emailInput = document.getElementById("idEmail");
var regExp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;


emailInput.addEventListener('keypress', function(e) {

     var handled = false;
    	if (e.key !== undefined) {
        	const regx = /^[0-9a-zа-я@.А-ЯёЁA-Z-_]+$/;
        	
       		 !regx.test(e.key) ? handled = true : handled = false;
   		 } else if (e.keyCode !== undefined) {
       		 const char = e.which || e.keyCode;
        	char === 106 || char === 107 ? handled = true : handled = false;
   		}

    if (handled) {
        e.preventDefault();
    }
               
	
});


/*
function filter(e, regexp) {
    // e = e || window.event;
   
     /*          
    var code =  e.charCode || e.keyCode;
    if (code < 32 ||  e.ctrlKey || e.altKey){
    	return;
    } 
 
	var text = String.fromCharCode( code );
    if ( !regexp.test(text) ) {
        if (e.preventDefault){
        	e.preventDefault();
        } 
        if (e.returnValue) e.returnValue = false;
        return false;
    };
 return true;
}

document.getElementById("idEmail").addEventListener("keypress", 
	function(event){
		return filter(event, /[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}/)
	},
 false);*/