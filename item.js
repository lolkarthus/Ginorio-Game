function newitem(name, location, damage, rarity, price, weight, equippable, description, lvlreq, strreq, intreq, dexreq) {
	this.name = name
	this.location = location
	if (location == 0 ) {
		this.location = null
	}
	this.damage = damage
	this.rarity = rarity
	this.price = price
	this.weight = weight
	this.equippable = equippable
	this.description = description
	this.lvlreq = lvlreq
	this.strreq = strreq
	this.intreq = intreq
	this.dexreq = dexreq

	if (rarity == 1) {
		this.userrarity = "common"
	} else if (rarity == 2) {
		this.userrarity = "uncommon"
	} else if (rarity == 3) {
		this.userrarity = "rare"
	} else if (rarity == 4) {
		this.userrarity = "epic"
	} else if (rarity == 5) {
		this.userrarity = "legendary"
	}
	

	
	this.image = "Assets/Images/Items/" + this.userrarity + "/" + name + ".png"
}