function Enemy(name, location, locationprob, str, int, dex, vit, expgiven, moneygiven, itemdropped, dropchance) {
	this.name = name
	this.location = location
	this.locationprob = locationprob
	if (location == 0) {
		this.location = null
	}
	this.str = str
	this.int = int
	this.dex = dex
	this.vit = vit
	this.health = vit
	this.expgiven = expgiven
	this.moneygiven = moneygiven
	this.itemdropped = itemdropped
	if (itemdropped == 0) {
		this.itemdropped = null
	}
	this.dropchance = dropchance
}