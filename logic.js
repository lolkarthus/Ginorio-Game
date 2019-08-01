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
var klass

introbgmusic = new Audio('the_road_home.mp3');
introbgmusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
introbgmusic.play();


function printstats() {
	console.log('int is ' + int)
	console.log('cha is ' + cha)
	console.log('str is ' + str)
	console.log('dex is ' + dex)
	console.log('vit is ' + vit)
	console.log('money is ' + money)
	console.log('race is ' + race)
	console.log('background is ' + bg)
	console.log('class is ' + klass)
	console.log('moral is ' + moral)
}

function button() {
	snd.play()
	snd.currentTime=0
}

function selectrace(rce) {
	button()
	race = rce
}

function selectbg(background) {
	button()
	bg = background
}

function selectclass(playerclass) {
	button()
	klass = playerclass
}



document.getElementById('start').onclick = function replacea() {
	button()
	$('#start').fadeOut(1000)
	$('#intro').fadeOut(1000)
	$('#raceinfo').delay(1000).fadeIn()
	$('#racetable').delay(1000).fadeIn()
	$('#confirmrace').delay(1000).fadeIn()
}

document.getElementById('confirmrace').onclick = function replaceb() {
	button()
	if (race == 'human') {
		int = 6
		cha = 6
		str = 5
		dex = 5
 		vit = 20
	}
	if (race == 'elf') {
		dex = 6
		int = 6
		str = 5
		cha = 5
 		vit = 20
		}
	if (race == 'dwarf') {
		str = 6
		vit = 22
		int = 5
		dex = 5
 		cha = 5
	}
	
	printstats()
	
	$('#racetable').fadeOut(1000)
	$('#confirmrace').fadeOut(1000)
	$('#raceinfo').fadeOut(1000)
	$('#bgquestion').delay(1000).fadeIn()
	$('#confirmbg').delay(1000).fadeIn()
	$('#bgtable').delay(1000).fadeIn()
	
}

document.getElementById('confirmbg').onclick = function replacec() {
	button()
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
	$('#intronext').delay(1000).fadeIn()
}

document.getElementById('intronext').onclick = function replaced() {
	button()
	$('.bginfo').fadeOut(1000)
	$('#intronext').fadeOut(1000)
	$('#classtable').delay(1000).fadeIn()
	$('#confirmclass').delay(1000).fadeIn()
}

document.getElementById('confirmclass').onclick = function replacee() {
	button()
	if (klass == 'warrior') {
		vit = vit + 2
		str++
		//add items
	}
	if (klass == "ranger") {
		dex = dex + 2
		//add items
	}
	if (klass == "mage") {
		int = int + 2
		//add items
	}
	
	printstats()
	
	$('#classtable').fadeOut(1000)
	$('#confirmclass').fadeOut(1000)
	$('#iscorrect').delay(1000).fadeIn()
	$('#identification').delay(1000).fadeIn()
	document.getElementById('identification').innerHTML = 'You are a level ' + lvl + ' ' + race + ' ' + klass + ' who is a ' + bg + ' with ' + str + ' strength' + ', ' + int + ' intelligence, ' + dex + ' dexterity, ' + cha + ' charisma, and ' + vit + ' health.'
	$('#restart').delay(1000).fadeIn()
	$('#confirmchar').delay(1000).fadeIn()
}

document.getElementById('restart').onclick = function replacef() {
	race = undefined
	klass = undefined
	bg = undefined
	str = 5
	int = 5
	dex = 5
	cha = 5
	vit = 20
	money = 0
	$('#restart').fadeOut(1000)
	$('#identification').fadeOut(1000)
	$('#iscorrect').fadeOut(1000)
	$('#confirmchar').fadeOut(1000)
	$('#racetable').delay(1000).fadeIn()
	$('#confirmrace').delay(1000).fadeIn()
	$('#raceinfo').delay(1000).fadeIn()
}

document.getElementById('confirmchar').onclick = function replaceg() {
	$('#restart').fadeOut(1000)
	$('#identification').fadeOut(1000)
	$('#iscorrect').fadeOut(1000)
	$('#confirmchar').fadeOut(1000)
}

