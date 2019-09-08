function newitem(name, location, damage, rarity, price, weight, equippable, description) {
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
	var userrarity
	if (rarity == 1) {
		userrarity = "Common"
	} else if (rarity == 2) {
		userrarity = "Uncommon"
	} else if (rarity == 3) {
		userrarity = "Rare"
	} else if (rarity == 4) {
		userrarity = "Epic"
	} else if (rarity == 5) {
		userrarity = "Legendary"
	}
	

	
	this.image = "Assets/Images/Items/" + userrarity + "/" + name + ".png"
}