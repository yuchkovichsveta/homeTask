
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

volumeBtn.addEventListener('click',function(e){
	if(video){
		
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