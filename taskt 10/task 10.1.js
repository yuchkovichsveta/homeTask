
 var video = document.querySelector("video");
 var playBtn = document.getElementById("play");
 var volumeBtn = document.getElementById("volume");
 var muteBtn = document.getElementById("mute");
 var speedMoreBtn = document.getElementById("speedMore");
 var speedLessBtn = document.getElementById("speedLess");
 var stopBtn = document.getElementById("stop");
 var div = document.getElementById("time");
 var playbackspeed = 1;
 var flag = document.getElementById("infty");
 var barContainer = document.getElementById("idbar");
 console.log(barContainer);

playBtn.addEventListener('click',function(e){
	if(video.paused){
		video.play();
		playBtn.innerText = "Pause";
	} else {
		video.pause();
		playBtn.innerText = "Play";
	}
	
})

muteBtn.addEventListener('click',function(e){
	if(video.muted){
		video.muted = false;
		muteBtn.innerText = "muted = false";
	} else {
		video.muted = true;
		muteBtn.innerText = "muted = true";
	}
	
})


stopBtn.addEventListener('click',function(e){
	if( !video.ended ) {
		video.ended;
		video.pause();
   		video.currentTime = 0;
	} 
	
})

flag.addEventListener('change',function(e){
	if(this.checked) {
        video.loop = true;
        console.log(video.loop);
    } else {
        // Checkbox is not checked..
    }
	
})
speedMoreBtn.addEventListener('click',function(e){
	if(video.play() && video.playbackRate <= 11.5){
		playbackspeed += 0.5;
		video.playbackRate = playbackspeed;
	} 
	
})

speedLessBtn.addEventListener('click',function(e){
	if( video.playbackRate > 1){
		playbackspeed -= 0.5;
		video.playbackRate = playbackspeed;
	} 
	
})


var range = document.getElementById('range');
  
 range.addEventListener('change', function(e) {
    var p = document.getElementById('one'); 
    //p.innerHTML = "volume:" + range.value;
    if (this.value == this.min){
       video.volume = 0;
    } else if(this.value == this.max){
       video.volume = 1;
    }
    else{
    	 video.volume = this.value;
    }
})

 barContainer.addEventListener('click', function(e){

    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100)  + "%";
	
	displayStatus = document.getElementById("displayStatus");
    displayStatus.innerHTML = (Math.round(video.currentTime*100)/100) + "sec";
})  


video.addEventListener("loadedmetadata", function(){
setInterval(function(){
	div.innerText = "Current time: " + Math.round(video.currentTime,2) + " sec" + "\n Total time: " + Math.round(video.duration,2) + " sec" +
	 "\n  playbackRate: " + video.playbackRate;
},500)
})
/*
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
},100)*/