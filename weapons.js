var Weapon = function() {

}

Weapon.prototype.init = function(description, min, max) {
	this.description = description;
	this.minDamage = min;
	this.maxDamage = max;
	this.imagefile = description.toLowerCase().replace(/\s/, '_') + ".png";
}

Weapon.prototype.image = function() {
	return this.imagefile;
}

Weapon.prototype.attack = function() {
	return this.minDamage + Math.round( Math.random() * (this.maxDamage - this.minDamage) );
}

var ShortSword = function() {
	$.extend(this, Weapon.prototype);
	this.init("Short Sword", 1, 3);	
}

var WalkingStaff = function() {
	$.extend(this, Weapon.prototype);
	this.init("Walking Staff", 0, 2);
}