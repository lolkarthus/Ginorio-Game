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

//introbgmusic = new Audio('the_road_home.mp3');
//introbgmusic.addEventListener('ended', function() {
 //   this.currentTime = 0;
 //   this.play();
//}, false);
//introbgmusic.play();


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
	document.getElementById('start').disabled = 'true'
	$('#start').fadeOut(1000)
	$('#intro').fadeOut(1000)
	$('#footer').fadeOut(1000)
	$('#logo').fadeOut(1000)
	$('#raceinfo').delay(1000).fadeIn()
	$('#racetable').delay(1000).fadeIn()
	$('#confirmrace').delay(1000).fadeIn()
}

document.getElementById('confirmrace').onclick = function replaceb() {
	button()
	document.getElementById('confirmrace').disabled = 'true'
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
	document.getElementById('confirmbg').disabled = 'true'
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
	$('#intronext1').delay(1000).fadeIn()
}

document.getElementById('intronext1').onclick = function replaced() {
	button()
	document.getElementById('intronext1').disabled = 'true'
	if (bg == 'farmer') {
		$('#farmerintrostory').delay(1000).fadeIn()
	}
	if (bg == 'noble') {
		$('#nobleintrostory').delay(1000).fadeIn()
	}
	if (bg == 'orphan') {
		$('#orphanintrostory').delay(1000).fadeIn()
	}
	if (bg == 'merchant') {
		$('#merchantintrostory').delay(1000).fadeIn()
	}
	if (bg == 'hunter') {
		$('#hunterintrostory').delay(1000).fadeIn()
	}
	$('#intronext2').delay(1000).fadeIn()
	$('.bginfo').fadeOut(1000)
	$('#intronext1').fadeOut(1000)
}
document.getElementById('intronext2').onclick = function replacee() {
	button()
	document.getElementById('intronext2').disabled = 'true'
	$('#intronext2').fadeOut(1000)
	$('.storyinfo').fadeOut(1000)
	$('#classtable').delay(1000).fadeIn()
	$('#confirmclass').delay(1000).fadeIn()
}
document.getElementById('confirmclass').onclick = function replacef() {
	button()
	document.getElementById('confirmclass').disabled = 'true'
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

document.getElementById('restart').onclick = function replaceg() {
	button()
	document.getElementById('restart').disabled = 'true'
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
	document.getElementById('start').disabled = false
	document.getElementById('confirmrace').disabled = false
	document.getElementById('confirmbg').disabled = false
	document.getElementById('intronext1').disabled = false
	document.getElementById('intronext2').disabled = false
	document.getElementById('confirmclass').disabled = false
	document.getElementById('restart').disabled = false
	document.getElementById('confirmchar').disabled = false
}

document.getElementById('confirmchar').onclick = function replaceh() {
	button()
	document.getElementById('confirmchar').disabled = 'true'
	$('#restart').fadeOut(1000)
	$('#identification').fadeOut(1000)
	$('#iscorrect').fadeOut(1000)
	$('#confirmchar').fadeOut(1000)
	$('#frm').delay(1000).fadeIn(1000)
}




var locationsIknow = ["panterville", "rehmont", "the great expanse", "ogre hills", "faerie forest", "ulidin", "riverrun", "brigand backwood", "adventurer's archipelago", "the cult of the dragon", "the fallen city of malakir", "the scorched mountains"]
var CurLocation = 'panterville'
var mapLocation = ""
var pastLocation = "panterville"

var items = ['sword', 'map']
var itemlocations = ['rehmont', 'ogre hills']

var inventory = []

var playersInput = ""
var gameMessage = ""
// Array of actions the game knows and a var for the current action
var actionsIknow = ['help', 'fight', 'inventory', 'go', 'use', 'take', 'drop', 'where']
var action = ""

var itemsIknow = ['sword', 'map']
var item = ""

// input and output fields
var input = document.querySelector("#message")
var output = document.querySelector('#txtArea')
//On enter key the command recognition is started
input.addEventListener("keyup", function(event){
	if (event.keyCode === 13) {
		event.preventDefault
		playGame()
	}
})



function playGame() {
	//Converts player input to lowercase
	playersInput = playersInput.toLowerCase()
	
	//reset variable
	gameMessage = ""
	action = ""
	 
 	//loops through all commands checking if input matches it and if so assigning it to current action
	for(i = 0; i < actionsIknow.length; i++) {
		
		if(playersInput.indexOf(actionsIknow[i]) !== -1) {
			action = actionsIknow[i]
			console.log("player's action: " + action)
			break
		}
	}
	
	for (i = 0; i < itemsIknow.length; i++) {
		if(playersInput.indexOf(itemsIknow[i]) !== -1) {
			item = itemsIknow[i]
			console.log("player's item: " + item)
		}
	}
	
	for (i = 0; i < locationsIknow.length; i++) {
		if(playersInput.indexOf(locationsIknow[i]) !== -1) {
			mapLocation = locationsIknow[i]
			console.log("Player's want's to go to: " + mapLocation)
		}
	}
	
	
	
	
	
	
	
	
	
	
	
$(".toggle-fullscreen").on("click",function(){

    var imageBlock = $(this).parent();
    
    $(this).hide();
    
    imageBlock.addClass('fullscreen-mode');
    
});	
	//choose correct action
	$(document).on('keyup', function(event){
    
    var ESC = 27;
    
	if (event.keyCode == ESC){
    	$('.fullscreen-mode').removeClass('fullscreen-mode').find('a.toggle-fullscreen').show();
		$('.clickable').hide()
		$('#player').hide()
		$('#map').hide()
    }
    
});
	
	
	
	
	
	
	
	
	
	
	
	switch(action) {
		
		case "help":
			console.log('help')
			var str1 = actionsIknow.join(", ")
			str1 = str1.split('').reverse().join('').replace(',', 'dna ,').split('').reverse().join('')
			gameMessage = 'Current commands are ' + str1
			break
			
			
		case "fight":
			console.log('fight')
			break
			
		case "inventory":
			console.log('inventory')
			var str2 = ''
			if (inventory.length == 0) {
				str2 = 'nothing'
			}
			if (inventory.length == 1) {
				str2 = inventory.join('')
			}
			if (inventory.length == 2) {
				str2 = inventory.join(' and ')
			}
			if (inventory.length >=3 ) {
				str2 = inventory.join(', ').split('').reverse().join('').replace(',', 'dna ,').split('').reverse().join('')
			}
			gameMessage = 'You have ' + str2 + '.'
			break
			
		case "take":	
			takeItem()
			break
			
		case "drop":
			dropItem()
			break
			
		case "use":
			useItem()
			break
			
		case 'go':
			go()
			break
		
		case 'where':
			gameMessage = "You are at " + titleCase(CurLocation) + "."
			break
		
		default:
			gameMessage = "Command not valid. Type help."
	}
		render()

}



function takeItem() {
	var itemIndexNumber = items.indexOf(item)
	console.log('madeit')
	if(itemIndexNumber !== -1 && itemlocations[itemIndexNumber] === CurLocation) {
		gameMessage = "You take " + item + "."
		inventory.push(item)
		items.splice(itemIndexNumber, 1)
		itemlocations.splice(itemIndexNumber, 1)
		console.log("World items: " + items)
		console.log("Inventory items: " + inventory)
	} else {
		gameMessage = "You can't do that."
	}
}

function dropItem() {
	if (inventory.length !== 0) {
		var inventoryIndexNumber = inventory.indexOf(item)
		if (inventoryIndexNumber !== -1) {
			gameMessage = "You drop " + item + "."
			items.push(inventory[inventoryIndexNumber])
			itemlocations.push(CurLocation)
			inventory.splice(inventoryIndexNumber, 1)
		} else {
			gameMessage = "You can't do that."
		}
	} else {
		gameMessage = "You don't have any items."
	}
}

function useItem() {
	var inventoryIndexNumber = inventory.indexOf(item)
	if (inventoryIndexNumber === -1) {
		gameMessage = "You don't have it."
	}
	if (inventory.length === 0) {
		gameMessage = "You don't have any items."
	}
	if (inventoryIndexNumber !== -1) {
		switch(item) {
			case "map":
				console.log('You used ' + item)
				$('.clickable').show()
				$('#player').show()
				$('#map').show()
				$('#frm').show()
				document.getElementById('clickhere').click()
				
				break
			
			case "sword":
				console.log('You used ' + item)
				break
				
			case "shield":
				console.log('You used ' + item)
				break
				
		}
	}
}


function go() {
	if (mapLocation == CurLocation) {
		gameMessage = "You're already at your destination."
	}
	switch(mapLocation) {
		case "riverrun":
			pastLocation = CurLocation
			CurLocation = "riverrun"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "panterville":
			pastLocation = CurLocation
			CurLocation = "panterville"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "rehmont":
			pastLocation = CurLocation
			CurLocation = "rehmont"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "the great expanse":
			pastLocation = CurLocation
			CurLocation = "the great expanse"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "ogre hills":
			pastLocation = CurLocation
			CurLocation = "ogre hills"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "faerie forest":
			pastLocation = CurLocation
			CurLocation = "faerie forest"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "ulidin":
			pastLocation = CurLocation
			CurLocation = "ulidin"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "brigand backwood":
			pastLocation = CurLocation
			CurLocation = "brigand backwood"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
		case "archipelago":
		case "adventurer's archipelago":
			pastLocation = CurLocation
			CurLocation = "adventurer's archipelago"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
		case "cult":
			case "the cult of the dragon":
			pastLocation = CurLocation
			CurLocation = "the cult of the dragon"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		case "malakir":
		case "the fallen city of malakir":
			pastLocation = CurLocation
			CurLocation = "the fallen city of malakir"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
		case "scorched mountains":
		case "the scorched mountains":
			pastLocation = CurLocation
			CurLocation = "the scorched mountains"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break
			
		default:
			gameMessage = "Location is unknown."
	}
}



function render() {
	addMessage(gameMessage)
	moveplayer()
	
}


function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ')
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1) 
   }

   return splitStr.join(' ')
}

function goto(place) {
	console.log('goto initiated')
	button()
	$('.fullscreen-mode').removeClass('fullscreen-mode').find('a.toggle-fullscreen').show()
	$('.clickable').hide()
	$('#player').hide()
	mapLocation = place
	go()
	render()
}


function moveplayer() {
			switch(CurLocation) {
		case "riverrun":
			document.getElementById('player').style.left = '43.5vw'
			document.getElementById('player').style.top = '39vh'
			break
			
		case "panterville":
			document.getElementById('player').style.left = '50.8vw'
			document.getElementById('player').style.top = '42vh'
			break
			
		case "rehmont":
			document.getElementById('player').style.left = '54.6vw'
			document.getElementById('player').style.top = '41vh'
			break
			
		case "the great expanse":
			document.getElementById('player').style.left = '52vw'
			document.getElementById('player').style.top = '49vh'
			break
			
		case "ogre hills":
			document.getElementById('player').style.left = '51.5vw'
			document.getElementById('player').style.top = '35vh'
			break
			
		case "faerie forest":
			document.getElementById('player').style.left = '48vw'
			document.getElementById('player').style.top = '44vh'
			break
			
		case "ulidin":
			document.getElementById('player').style.left = '46.4vw'
			document.getElementById('player').style.top = '53vh'
			break
			
		case "brigand backwood":
			document.getElementById('player').style.left = '46vw'
			document.getElementById('player').style.top = '33vh'
			break
			
		case "adventurer's archipelago":
			document.getElementById('player').style.left = '42vw'
			document.getElementById('player').style.top = '56vh'
			break
			
			case "the cult of the dragon":
			document.getElementById('player').style.left = '35.5vw'
			document.getElementById('player').style.top = '56vh'
			break
			
		case "the fallen city of malakir":
			document.getElementById('player').style.left = '52vw'
			document.getElementById('player').style.top = '69vh'
			break
			
		case "the scorched mountains":
			document.getElementById('player').style.left = '50vw'
			document.getElementById('player').style.top = '73vh'
			break
	}
	}









































function hasVertScrollbar(elem) {
	//see if there's a scroll bar, return true if there is
	return elem.clientHeight < elem.scrollHeight
}

function addMessage(str) {
	
	var textarea = document.getElementById("txtArea")
	
	//remove all padding
	var val = textarea.value.replace(/^\n+/,"")
	//update value with message
	val += (new Date()).toLocaleTimeString() + ": " + str + "\n"
	textarea.value = val
	
	//create loop where we add line break until a scrollbar appears
	var padding = []
	while (!hasVertScrollbar(textarea)) {
		padding.push("\n")
		textarea.value = "\n" + textarea.value
	}
	//need to remove one
	padding.pop()
	//update textarea with the padding and updated text
	textarea.value = padding.join("") + val
	//scroll to bottom
	textarea.scrollTop = textarea.scrollHeight
}
function chat(e) {
	var msg = document.getElementById("message")
	addMessage(msg.value)
	playersInput = input.value
	msg.value = ""
	e.preventDefault()
	return false
}

document.getElementById('frm').addEventListener("submit", chat, false)











