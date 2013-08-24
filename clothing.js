var Wearable = function() {

}

Wearable.prototype.init = function(description, hp) {
	this.description = description;
	this.hp = hp;
	this.imagefile = description.toLowerCase().replace(/\s/, '_') + ".png";
}

Wearable.prototype.image = function() {
	return this.imagefile;
}

var Tunic = function() {
	$.extend(this, Wearable.prototype);
	this.init("Tunic", 0);
}

var Robe = function() {
	$.extend(this, Wearable.prototype);
	this.init("Robe", 0);	
}

var LeatherSandals = function() {
	$.extend(this, Wearable.prototype);
	this.init("Leather Sandals", 0);
}