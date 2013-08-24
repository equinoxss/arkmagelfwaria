var Empty = function() {
	
}

Empty.prototype.image = function() {
	return "blank.png";
}

//================================================

var Container = function() {
}

Container.prototype.canAttack = function() {
	return false;
}

Container.prototype.canOpen = function() {
	return true;
}

//================================================

var Wall = function(opt1, opt2) {
	this.low = false;
	this.hiddenDoor = false;

	if (opt1 === "l" || opt2 === "l") {
		this.low = true;
	}
	if (opt1 === "hd" || opt2 === "hd") {
		this.hiddenDoor = true;
	}
}

Wall.prototype.image = function() {
	if (this.low) {
		return "wall_low.png";
	} else {
		return "wall.png";
	}
}

Wall.prototype.collision = function() {
	return {condition:"solid"};
}

//================================================

var Floor = function() {

}

Floor.prototype.image = function() {
	return "floor4.png"
}

//================================================

var Door = function(orientation, position) {
	this.orientation = orientation;
	this.position = position;
	this.locked = false;
}

Door.prototype.image = function() {
	return "door_" + this.orientation + this.position +".png"
}

Door.prototype.collision = function() {
	if (this.locked) {
		return {condition:"locked"};
	} else if (this.position == "c") {
		this.position = "o";
		return {condition:"opened"};
	} else if (this.position == "o") {
		return {condition:"passthru"};
	}
	return {condition:"locked"};	
}

//================================================

var Fireplace = function(opt1) {
	this.hiddenDoor = false;

	if (opt1 === "hd" || opt2 === "hd") {
		this.hiddenDoor = true;
	}
}

Fireplace.prototype.image = function() {
	return "fireplace.png"
}

Fireplace.prototype.collision = function() {
	return {condition:"solid"};
}

//================================================

var Chest = function(position, contents) {
	$.extend(this, Container.prototype);
	this.position = position;
	this.contents = contents;
}

Chest.prototype.image = function() {
	return "chest_" + this.position +".png"
}

