var rect = document.getElementById('rect');

setInterval(function() {
  if(rect.getBoundingClientRect().top < 40) {
    rect.classList.add('fix');
  }
  if(window.scrollY > 12000){
    rect.classList.remove('fix');
  }
  if(window.scrollY <= 1900){
		rect.classList.remove('fix');
	}

}, 1);

