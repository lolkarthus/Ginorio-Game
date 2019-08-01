var snd = new Audio("button.mp3")
var lvl = 1
var exp = 0
var int = 5
var cha = 5
var str = 5
var dex = 5
var vit = 20
var money = 0
var moral = 0
var race
var bg

function printstats() {
	console.log('int is ' + int)
	console.log('cha is ' + cha)
	console.log('str is ' + str)
	console.log('dex is ' + dex)
	console.log('vit is ' + vit)
	console.log('money is ' + money)
	console.log('race is ' + race)
	console.log('background is ' + bg)
	console.log('moral is ' + moral)
}
function selectrace(rce) {
	snd.play()
	snd.currentTime=0
	race = rce
	if (race == 'Human') {
		int = 6
		cha = 6
		str = 5
		dex = 5
 		vit = 20
		race = 'Human'
	}
	if (race == 'Elf') {
		dex = 6
		int = 6
		str = 5
		cha = 5
 		vit = 20
		race = 'Elf'
		}
	if (race == 'Dwarf') {
		str = 6
		vit = 22
		int = 5
		dex = 5
 		cha = 5
		race = 'Dwarf'
	}
	printstats()
}

function selectbg(background) {
	snd.play()
	snd.currentTime=0
	bg = background
	if (bg == 'farmer') {
		bg = 'farmer'
	}
	if (bg == 'noble') {
		bg = 'noble'
	}
	if (bg == 'orphan') {
		bg = 'orphan'
	}
	if (bg == 'merchant') {
		bg = 'merchant'
	}
	if (bg == 'hunter') {
		bg = 'hunter'
	}
}




document.getElementById('start').onclick = function replacea() {
	snd.play()
	snd.currentTime=0
	$('#start').fadeOut(1000)
	$('#intro').fadeOut(1000)
	$('#raceinfo').delay(1000).fadeIn()
	$('#racetable').delay(1000).fadeIn()
	$('#confirmrace').delay(1000).fadeIn()
}

document.getElementById('confirmrace').onclick = function replaceb() {
	snd.play()
	snd.currentTime=0
	$('#racetable').fadeOut(1000)
	$('#confirmrace').fadeOut(1000)
	$('#raceinfo').fadeOut(1000)
	$('#bgquestion').delay(1000).fadeIn()
	$('#confirmbg').delay(1000).fadeIn()
	$('#bgtable').delay(1000).fadeIn()
}

document.getElementById('confirmbg').onclick = function replacec() {
	snd.play()
	snd.currentTime=0
	if (bg == 'farmer') {
		str = str + 2
		dex++
		int--
		
		money = 30
		$('#farmerinfo').delay(1000).fadeIn()
	}
	if (bg == 'noble') {
		int = int + 2
		cha++
		str--
		money = 100
		$('#nobleinfo').delay(1000).fadeIn()
	}
	if (bg == 'orphan') {
		dex = dex + 3
		cha--
		money = 10
		$('#orphaninfo').delay(1000).fadeIn()
	}
	if (bg == 'merchant') {
		cha++
		int++
		money = 75
		$('#merchantinfo').delay(1000).fadeIn()
	}
	if (bg == 'hunter') {
		dex++
		str++
		money = 45
		$('#hunterinfo').delay(1000).fadeIn()
	}
	
	printstats()
	
	$('#bgquestion').fadeOut(1000)
	$('#bgtable').fadeOut(1000)
	$('#confirmbg').fadeOut(1000)
}


