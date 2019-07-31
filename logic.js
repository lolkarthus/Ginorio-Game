var snd = new Audio("button.mp3");

document.getElementById('start').onclick = function replace() {
	snd.play()
	snd.currentTime=0;
	$('#start').fadeOut(1000)
	$('#intro').fadeOut(1000)
	
}