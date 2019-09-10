var snd = new Audio("Assets/Music/button.mp3")
var lvlupeffect = new Audio('Assets/Music/lvlup.mp3')
var lvl = 1
var exp = 0
var int = 5
var cha = 5
var str = 5
var dex = 5
var vit = 20
var health = vit
var money = 0
var moral = 0
var race
var bg
var klass
var weight = 0

var locationsIknow = ["panterville", "rehmont", "the great expanse", "ogre hills", "faerie forest", "ulidin", "riverrun", "brigand backwood", "adventurer's archipelago", "the cult of the dragon", "the fallen city of malakir", "the scorched mountains"]
var CurLocation = 'panterville'
var mapLocation = ""
var pastLocation = "panterville"


//name, location, damage, rarity, price, weight, equippable, description
//rarity 1: common, 2: uncommon, 3: rare, 4: epic, 5:legendary
var sword = new newitem("sword", "rehmont", 5, 1, 30, 6, true)
var club = new newitem("club", 0, 7, 1, 5, 10, true)
var scimitar = new newitem("scimitar", 0, 10, 2, 50, 6, true)
var upgraded_scimitar = new newitem("upgraded scimitar", 0, 12, 3, 60, 6, true)
var mace = new newitem("mace", 0, 15, 3, 65, 10, true)

var bow = new newitem("bow", "faerie forest", 5, 1, 30, 4, true)

var staff = new newitem("staff", "panterville", 5, 1, 30, 4, true)


var map = new newitem("map", 0, 0, 1, 20, 1, false)
	//var bed
var small_health_potion = new newitem("small health potion", 0, 0, 1, 15, 2, false)
var small_mana_potion = new newitem("small mana potion", 0, 0, 1, 15, 2, false)
var medium_health_potion = new newitem("medium health potion", 0, 0, 2, 30, 3, false)
var medium_mana_potion = new newitem("medium mana potion", 0, 0, 2, 30, 3, false)
var large_health_potion = new newitem("large health potion", 0, 0, 3, 50, 4, false)
var large_mana_potion = new newitem("large mana potion", 0, 0, 3, 50, 4, false)
	//var leather_armor
	//var chain_armor
	//var plate_armor

var items = [sword, club, scimitar, bow, staff, map, small_health_potion, small_mana_potion, medium_health_potion, medium_mana_potion, large_health_potion, large_mana_potion]
	//var itemlocations = ['rehmont', 'ogre hills']
var inventory = [map]

var playersInput = ""
var gameMessage = ""
	// Array of actions the game knows and a var for the current action
var actionsIknow = ['help', 'attack', 'inventory', 'go', 'use', 'take', 'drop', 'where', 'equip', 'inspect']
var action = ""

var itemsIknow = items
var item = ""
var equipped

//name, location, locationprob, str, int, dex, vit, expgiven, moneygiven, itemdropped, dropchance
var ogre = new Enemy('ogre', ['ogre hills', 'the great expanse'], [1, 0.5], 10, 2, 3, 35, 100, 10, club, 0.5)
var orc = new Enemy('orc', ['the great expanse'], [1], 7, 4, 4, 25, 50, 20, sword, 0.7)
var bandit = new Enemy('bandit', ['brigand backwood'], [1], 6, 5, 7, 20, 65, 40, bow, 0.65)

var enemies = [ogre, orc, bandit]
var enemiesIknow = enemies
var enemySel = ""
var selectedenemies = []

var combat = false


//introbgmusic = new Audio('Assets/Music/the_road_home.mp3')
//introbgmusic.addEventListener('ended', function() {
//   this.currentTime = 0;
//   this.play()
//}, false)
//introbgmusic.play()


function printstats() {
	console.log('int is ' + int)
	console.log('cha is ' + cha)
	console.log('str is ' + str)
	console.log('dex is ' + dex)
	console.log('vit is ' + vit)
	console.log('lvl is ' + lvl)
	console.log('money is ' + money)
	console.log('race is ' + race)
	console.log('background is ' + bg)
	console.log('class is ' + klass)
	console.log('moral is ' + moral)
}

function button() {
	snd.play()
	snd.currentTime = 0
}

function levelmusic() {
	lvlupeffect.play()
	lvlupeffect.currentTime = 0
}

function updatebackgroundimages() {
	document.getElementById("farmer_image").src = "Assets/Images/" + titleCase(race) + "/Farmer_Ginorio.png"
	document.getElementById("hunter_image").src = "Assets/Images/" + titleCase(race) + "/Hunter_Ginorio.png"
	document.getElementById("merchant_image").src = "Assets/Images/" + titleCase(race) + "/Merchant_Ginorio.png"
	document.getElementById("noble_image").src = "Assets/Images/" + titleCase(race) + "/Noble_Ginorio.png"
	document.getElementById("orphan_image").src = "Assets/Images/" + titleCase(race) + "/Orphan_Ginorio.png"
}

function updateclassimages() {
	document.getElementById("warrior_image").src = "Assets/Images/" + titleCase(race) + "/" + titleCase(bg) + "_Warrior_Ginorio.png"
	document.getElementById("ranger_image").src = "Assets/Images/" + titleCase(race) + "/" + titleCase(bg) + "_Ranger_Ginorio.png"
	document.getElementById("mage_image").src = "Assets/Images/" + titleCase(race) + "/" + titleCase(bg) + "_Mage_Ginorio.png"
}

function selectrace(rce) {
	button()
	race = rce
	updatebackgroundimages()
}

function selectbg(background) {
	button()
	bg = background
	updateclassimages()
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
		inventory.push(sword)
		equipped = sword
	}
	if (klass == "ranger") {
		dex = dex + 2
		inventory.push(bow)
		equipped = bow
	}
	if (klass == "mage") {
		int = int + 2
		inventory.push(staff)
		equipped = staff
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
	inventory = []
	equipped = ''
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
	$('#locationbg').delay(1000).fadeIn(1000)
	health = vit
}



// input and output fields
var input = document.querySelector("#message")
var output = document.querySelector('#txtArea')
	//On enter key the command recognition is started
input.addEventListener("keyup", function (event) {
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
	for (i = 0; i < actionsIknow.length; i++) {

		if (playersInput.indexOf(actionsIknow[i]) !== -1) {
			action = actionsIknow[i]
			console.log("player's action: " + action)
			break
		}
	}

	for (i = 0; i < itemsIknow.length; i++) {
		if (playersInput.indexOf(itemsIknow[i].name) !== -1) {
			item = itemsIknow[i]
			console.log("player's item: " + item)
		}
	}

	for (i = 0; i < locationsIknow.length; i++) {
		if (playersInput.indexOf(locationsIknow[i]) !== -1) {
			mapLocation = locationsIknow[i]
			console.log("Player wants to go to: " + mapLocation)
		}
	}


	for (i = 0; i < enemiesIknow.length; i++) {
		if (playersInput.indexOf(enemiesIknow[i].name) !== -1) {
			enemySel = enemiesIknow[i]
			console.log("Player wants to attack " + enemiesIknow[i].name)
		}
	}








	$(".toggle-fullscreen").on("click", function () {

		var imageBlock = $(this).parent();

		$(this).hide();

		imageBlock.addClass('fullscreen-mode');

	});
	//choose correct action
	$(document).on('keyup', function (event) {

		var ESC = 27;

		if (event.keyCode == ESC) {
			$('.fullscreen-mode').removeClass('fullscreen-mode').find('a.toggle-fullscreen').show();
			$('.clickable').hide()
			$('#player').hide()
			$('#map').hide()
		}

	});




	//combat itself, they attack and have a chance to hit you and do damage, attacks can crit, add randomness
	//skills, elemental damage, 

	switch (action) {

		case "help":
			console.log('help')
			var str1 = actionsIknow.join(", ")
			str1 = str1.split('').reverse().join('').replace(',', 'dna ,').split('').reverse().join('')
			gameMessage = 'Current commands are ' + str1
			break


		case "attack":
			console.log('attack')
			attack()
			break

		case "inventory":
			console.log('inventory')
			var str2 = []
			var str3 = ""
			for (i = 0; i < inventory.length; i++) {
				str2.push(inventory[i].name)
			}
			if (str2.length == 0) {
				str3 = 'nothing'
			}
			if (str2.length == 1) {
				str3 = str2.join(' ')
			}
			if (str2.length == 2) {
				str3 = str2.join(' and ')
			}
			if (str2.length >= 3) {
				str3 = str2.join(', ').split('').reverse().join('').replace(',', 'dna ,').split('').reverse().join('')
			}


			gameMessage = 'You have ' + str3 + '.'
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

		case 'equip':
			if (inventory.indexOf(item) !== -1) {
				if (item.equippable == true) {
					equipped = item
					document.getElementById('equippeditem').src = "Assets/Images/Items/Holdables/" + equipped.name + ".png"
					document.getElementById('equippeditem').alt = equipped.name
					gameMessage = "You've equipped " + item.name + "."
				} else {
					gameMessage = titleCase(item.name) + " is not able to be equipped."
				}
			} else {
				gameMessage = "You don't have " + item.name + "."
			}
			break

		case 'inspect':
			if (inventory.indexOf(item) !== -1) {
				gameMessage = item.description
			} {
				gameMessage = "You don't have " + item.name + "."
			}
			break

		default:
			gameMessage = "Command not valid. Type help."
	}
	render()

}


function takeItem() {
	if (item.location === CurLocation) {
		gameMessage = "You take " + item.name + "."
		inventory.push(item)
		item.location = "inventory"

	} else {
		gameMessage = "You can't do that."
	}
}


function dropItem() {
	if (inventory.length !== 0) {
		if (inventory.indexOf(item) !== -1) {
			if (item == equipped) {
				equipped = ""
			}
			gameMessage = "You drop " + item.name + "."
			item.location = CurLocation
			inventory.splice(inventory.indexOf(item), 1)

		} else {
			gameMessage = "You can't do that."
		}
	} else {
		gameMessage = "You don't have any items."
	}
}


function useItem() {
	if (inventory.indexOf(item) === -1) {
		gameMessage = "You don't have " + item.name + "."
	}
	if (inventory.length === 0) {
		gameMessage = "You don't have any items."
	}
	if (inventory.indexOf(item) !== -1) {
		switch (item.name) {

			case "map":
				console.log('You used ' + item)
				$('.clickable').show()
				$('#player').show()
				$('#map').show()
				$('#frm').show()
				document.getElementById('clickhere').click()
				break

			case "sword":
				console.log('You used ' + item.name)
				break

			case "bow":
				console.log('You used ' + item.name)
				break

			case "staff":
				console.log('You used ' + item.name)
				break

			case "club":
				console.log('You used ' + item.name)
				break


		}
	}
}


function go() {
	var ambush = true
	if (combat = true) {
		enemySel = ''
		selectedenemies = []
		$('#locationbg').fadeTo(500, 1)
		$("#combatginorio").fadeOut(500)
		$("#equippeditem").fadeOut(500)
		$("#arrow").fadeOut()

		$("#combatenemy1").fadeOut(500)
		$("#combatenemy2").fadeOut(500)
		$("#combatenemy3").fadeOut(500)

		$("#enemy1item").fadeOut(500)
		$("#enemy2item").fadeOut(500)
		$("#enemy3item").fadeOut(500)

		$("#en1healthContainer").fadeOut(500)
		$("#en2healthContainer").fadeOut(500)
		$("#en3healthContainer").fadeOut(500)

		$("#healthContainer").fadeOut(500)
		$("#manaContainer").fadeOut(500)
		$("#expContainer").fadeOut(500)

		combat = false
	}
	if (mapLocation == CurLocation) {
		gameMessage = "You're already at your destination."
		render()
		ambush = false
		return
	}
	switch (mapLocation) {
		case "riverrun":
			pastLocation = CurLocation
			CurLocation = "riverrun"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			render()
			break

		case "panterville":
			pastLocation = CurLocation
			CurLocation = "panterville"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			render()

			break

		case "rehmont":
			pastLocation = CurLocation
			CurLocation = "rehmont"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			render()
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
			render()
			break

		case "faerie forest":
			pastLocation = CurLocation
			CurLocation = "faerie forest"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			render()
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

		case "adventurer's archipelago":
			pastLocation = CurLocation
			CurLocation = "adventurer's archipelago"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break

		case "the cult of the dragon":
			pastLocation = CurLocation
			CurLocation = "the cult of the dragon"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break

		case "the fallen city of malakir":
			pastLocation = CurLocation
			CurLocation = "the fallen city of malakir"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break

		case "the scorched mountains":
			pastLocation = CurLocation
			CurLocation = "the scorched mountains"
			gameMessage = "You have travelled from " + titleCase(pastLocation) + " to " + titleCase(CurLocation) + "."
			break

		default:
			gameMessage = "Location is unknown."
			ambush = false
	}
	document.getElementById("locationbg").src = "Assets/Images/Locations/" + CurLocation + ".png"
	document.getElementById("locationbg").alt = titleCase(CurLocation)

	if (ambush == true) {
		var possible_enemies = []


		for (var i = 0; i < enemies.length; i++) {
			for (var j = 0; j < enemies[i].location.length; j++) {
				if (enemies[i].location[j].indexOf(CurLocation) != -1) {
					possible_enemies.push(enemies[i])
				}
			}
		}
		var probabilities = []
		var probindices = 0
		for (var l = 0; l < possible_enemies.length; l++) {
			probindices = possible_enemies[l].location.indexOf(CurLocation)
			probabilities.push(possible_enemies[l].locationprob[probindices])
		}
		var numberofenemies = getRandomIntInclusive(1, 3)
		for (var n = 0; n < numberofenemies; n++) {
			selectedenemies.push(chance.weighted(possible_enemies, probabilities))
		}

		commencecombat()
		var str2 = []
		var str3 = ""
		for (i = 0; i < selectedenemies.length; i++) {
			str2.push(selectedenemies[i].name)
		}
		if (str2.length == 1) {
			str3 = str2.join(' ')
		}
		if (str2.length == 2) {
			str3 = str2.join(' and ')
		}
		if (str2.length >= 3) {
			str3 = str2.join(', ').split('').reverse().join('').replace(',', 'dna ,').split('').reverse().join('')
		}
		gameMessage = 'You were ambushed by ' + str3 + '!'

	}
}


/*var goingtokill = false

function youattack() {
	var random = getRandomIntInclusive(1, 100)
	if (random > enemySel.dex) {

		if (enemySel.health - str <= 0) {
			goingtokill = true
		}
		enemySel.health -= str
		if (enemySel.health <= 0) {
			enemySel.health = 0
		}
		gameMessage = "You damaged the " + enemySel.name + " by " + str + "." + " It has " + enemySel.health + " health remaining."
		if (dex >= enemySel.dex || goingtokill == true) {
			render()
		}
		goingtokill = false
		if (enemySel.health <= 0) {
			gameMessage = titleCase(enemySel.name) + " is defeated. You gain " + enemySel.expgiven + ' exp and ' + enemySel.moneygiven + ' gold.'
			money += enemySel.moneygiven
			exp += enemySel.expgiven
			if (exp >= 300) {
				if (readytolvl(exp) == true) {
					render()
					str++
					int++
					dex++
					cha++
					vit = vit + 2
					health = health + 2
					levelmusic()
					gameMessage = "You've leveled up! You're now level " + lvl + ". You now have " + str + ' strength' + ', ' + int + ' intelligence, ' + dex + ' dexterity, ' + cha + ' charisma, and ' + vit + ' max health.'
				}
			}
		}
	} else {
		gameMessage = titleCase(enemySel.name) + " dodged your attack! " + titleCase(enemySel.name) + "'s health remains at " + enemySel.health + "."
		if (dex >= enemySel.dex) {
			render()
		}
	}

	if (dex < enemySel.dex && enemySel.health <= 0) {
		enemySel.health = enemySel.vit
	}
}

function heattacks() {
	var random = getRandomIntInclusive(1, 100)

	if (enemySel.health > 0) {

		if (random > dex) {

			health -= enemySel.str
			if (health <= 0) {
				health = 0
			}
			gameMessage = titleCase(enemySel.name) + ' did ' + enemySel.str + " damage to you. You're at " + health + ' health.'
			if (dex < enemySel.dex) {
				render()
			}
			if (health <= 0) {
				for (i = 1; i < lvl; i++) {
					str--
					int--
					dex--
					cha--
					vit--
				}
				render()
				lvl = 0
				exp = 0
				money = 50
				inventory = []
				health = vit
				moral = 0
				gameMessage = titleCase(enemySel.name) + ' has killed you. Game over!'
				enemySel.health = enemySel.vit
			}

		} else {
			gameMessage = "You dodged the " + enemySel.name + "'s attack! You remain at " + health + ' health.'
			if (dex < enemySel.dex) {
				render()
			}
		}
	} else if (dex >= enemySel.dex) {
		enemySel.health = enemySel.vit
	}
}


function fight() {
	if (dex >= enemySel.dex) {
		youattack()
		heattacks()
	} else if (dex < enemySel.dex) {
		heattacks()
		youattack()
	}
}
*/
var position = 1

function selectenemy() {
	document.getElementById('arrow').style.top = "20%"
	document.getElementById('arrow').style.right = "41%"
	$("#arrow").show()


	$(document).on('keydown', function (event) {

		var LEFT = 37
		var RIGHT = 39
		var ENTER = 13

		if (selectedenemies.length != 1) {
			if (selectedenemies.length == 2) {
				if (event.keyCode == RIGHT) {
					if (position == 1) {
						position++
						var resulta = parseInt(document.getElementById('arrow').style.top, 10) - 3
						var resultb = parseInt(document.getElementById('arrow').style.right, 10) - 13
						document.getElementById('arrow').style.top = resulta.toString() + "%"
						document.getElementById('arrow').style.right = resultb.toString() + "%"
					} else {
						position = 1
						document.getElementById('arrow').style.top = "20%"
						document.getElementById('arrow').style.right = "41%"
					}
				}

				if (event.keyCode == LEFT) {
					if (position == 2) {
						position--
						var resultc = parseInt(document.getElementById('arrow').style.top, 10) + 3
						var resultd = parseInt(document.getElementById('arrow').style.right, 10) + 13
						document.getElementById('arrow').style.top = resultc.toString() + "%"
						document.getElementById('arrow').style.right = resultd.toString() + "%"
					} else {
						position = 2
						document.getElementById('arrow').style.top = "17%"
						document.getElementById('arrow').style.right = "28%"
					}
				}
			}
			if (selectedenemies.length == 3) {
				if (event.keyCode == RIGHT) {
					if (position == 1 || position == 2) {
						position++
						var resulta = parseInt(document.getElementById('arrow').style.top, 10) - 3
						var resultb = parseInt(document.getElementById('arrow').style.right, 10) - 13
						document.getElementById('arrow').style.top = resulta.toString() + "%"
						document.getElementById('arrow').style.right = resultb.toString() + "%"
					} else {
						position = 1
						document.getElementById('arrow').style.top = "20%"
						document.getElementById('arrow').style.right = "41%"
					}
				}

				if (event.keyCode == LEFT) {
					if (position == 2 || position == 3) {
						position--
						var resultc = parseInt(document.getElementById('arrow').style.top, 10) + 3
						var resultd = parseInt(document.getElementById('arrow').style.right, 10) + 13
						document.getElementById('arrow').style.top = resultc.toString() + "%"
						document.getElementById('arrow').style.right = resultd.toString() + "%"
					} else {
						position = 3
						document.getElementById('arrow').style.top = "14%"
						document.getElementById('arrow').style.right = "15%"
					}
				}
			}
			if (event.keyCode == ENTER) {
				enemySel = selectedenemies[position - 1]
				$('#arrow').hide()
				dmg()
			}
		} else {
			if (event.keyCode == ENTER) {
				enemySel = selectedenemies[position - 1]
				$('#arrow').hide()
				dmg()
			}
		}
	})
}
var turn = false

function turnorder() {
	if (enemySel == "") {
		enemySel = selectedenemies[0]
	}
	if (dex >= enemySel.dex) {
		turn = true
	} else {
		turn = false
	}
}

function dmg() {
	var damage = Math.round(equipped.damage + str / 2)
	if (getRandomIntInclusive(1, 20) == 20) {
		damage = damage * 2
	}
	enemySel.health -= damage
	if (enemySel.health <= 0) {
		enemySel.health = 0
		document.getElementById('en' + position + 'health').style.width = "0%"
		gameMessage = "You damaged the " + enemySel.name + " by " + damage + "." + " It has " + enemySel.health + " health remaining."
		render()
		gameMessage = "You have slain " + enemySel.name + "."
		console.log('enemy is dead')
	} else if (enemySel.health > 0) {
		document.getElementById('en' + position + 'health').style.width = Math.round(((damage / enemySel.health) * 100)).toString() + "%"
		render()
		console.log('dealing ' + damage)
		gameMessage = "You damaged the " + enemySel.name + " by " + damage + "." + " It has " + enemySel.health + " health remaining."
		hurt()
	}
	
	
}

function hurt() {
	var damage = Math.round(enemySel.itemdropped.damage + enemySel.str / 2)
	if (getRandomIntInclusive(1, 20) == 20) {
		damage = damage * 2
	}
	health -= damage
	if (health <= 0) {
		health = 0 
		document.getElementById('health').style.width = "0%"
		gameMessage = "The " + enemySel.name + " dealt " + damage + " damage. You have " + health + " health remaining."
		render()
		gameMessage = "You have died. Game over!"
		console.log('dead')
	} else if (health > 0) {
		document.getElementById('health').style.width = Math.round(((damage / health) * 100)).toString() + "%"
		console.log('taking ' + damage)
		gameMessage = "The " + enemySel.name + " dealt " + damage + " damage. You have " + health + " health remaining."
	}
	
	turn = true
}

function attack() {
	if (combat == true) {

		if (turn == true) {
			console.log('your turn')
			selectenemy()
			gameMessage = "Selecting..."
			

		} else if (turn == false) {
			console.log('enemy turn')
			hurt()
		}

	}
}

function commencecombat() {
	combat = true
	$('#locationbg').fadeTo(500, 0.4)
	document.getElementById("combatginorio").src = "Assets/Images/" + titleCase(race) + "/" + titleCase(bg) + "_Ginorio.png"
	$("#combatginorio").delay(500).fadeIn(500)
	$("#equippeditem").delay(500).fadeIn(500)
	$("#healthContainer").delay(500).fadeIn(500)
	$("#manaContainer").delay(500).fadeIn(500)
	$("#expContainer").delay(500).fadeIn(500)

	for (var i = 0; i < selectedenemies.length; i++) {
		document.getElementById("combatenemy" + [i + 1]).src = "Assets/Images/Enemies/" + selectedenemies[i].name + ".png"
		document.getElementById("combatenemy" + [i + 1]).alt = selectedenemies[i].name
		document.getElementById("enemy" + [i + 1] + "item").src = "Assets/Images/Items/Holdables/" + selectedenemies[i].itemdropped.name + ".png"
		document.getElementById("enemy" + [i + 1] + "item").alt = selectedenemies[i].itemdropped.name
		$("#combatenemy" + [i + 1]).delay(500).fadeIn(500)
		$("#enemy" + [i + 1] + "item").delay(500).fadeIn(500)
		$("#en" + [i + 1] + "healthContainer").delay(500).fadeIn(500)
	}


	turnorder()
}


function readytolvl(xp) {
	var oldlvl = lvl
		//need to rework lvl equation
	lvl = Math.round(0.0303721 * Math.sqrt((xp - 300)) + 2.39352)
	if (lvl == oldlvl + 1) {
		return true
	} else {
		return false
	}
}

function render() {
	addMessage(gameMessage)
	moveplayer()
	item = ''
}


function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ')
	for (var i = 0; i < splitStr.length; i++) {
		splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
	}
	return splitStr.join(' ')
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function goto(place) {
	console.log('goto initiated')
	button()
	mapLocation = place
	go()
	render()
}


function moveplayer() {
	switch (CurLocation) {
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
	var val = textarea.value.replace(/^\n+/, "")
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
