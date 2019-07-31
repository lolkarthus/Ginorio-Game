var snd = new Audio("button.mp3")
var int = 0
var cha = 0
var str = 0
var dex = 0
var vit = 0


function select(race) {
	snd.play()
	snd.currentTime=0
	if (race == 'Human') {
		console.log('U R a human')
		int = 1
		cha = 1
		str = 0
		dex = 0
 		vit = 0
	}
	if (race == 'Elf') {
			console.log('U R an elf')
		dex = 1
		int = 1
		str = 0
		cha = 0
 		vit = 0
		}
	if (race == 'Dwarf') {
		console.log('U R a dwarf')
		str = 1
		vit = 1
		int = 0
		dex = 0
 		cha = 0
	}
	console.log('int is ' + int)
	console.log('cha is ' + cha)
	console.log('str is ' + str)
	console.log('dex is ' + dex)
	console.log('vit is ' + vit)
}


document.getElementById('start').onclick = function replace() {
	snd.play()
	snd.currentTime=0
	$('#start').fadeOut(1000)
	$('#intro').fadeOut(1000)
	$('#raceinfo').delay(1000).fadeIn()
	$('.table').delay(1000).fadeIn()
	$('#confirm').delay(1000).fadeIn()
}

document.getElementById('confirm').onclick = function replaceb() {
	snd.play()
	snd.currentTime=0
	$('#racetable').fadeOut(1000)
	$('#confirm').fadeOut(1000)
	$('#raceinfo').fadeOut(1000)
}




