var Empty = function() {
	
}

Empty.prototype.image = function() {
	return "images/blank.png";
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
		return "images/wall_low.png";
	} else {
		return "images/wall.png";
	}
}

//================================================

var Floor = function() {

}

Floor.prototype.image = function() {
	return "images/wood_floor.png"
}

//================================================

var Door = function(orientation, position) {
	this.orientation = orientation;
	this.position = position;
}

Door.prototype.image = function() {
	return "images/door_" + this.orientation + this.position +".png"
}

//================================================

var Fireplace = function(opt1) {
	this.hiddenDoor = false;

	if (opt1 === "hd" || opt2 === "hd") {
		this.hiddenDoor = true;
	}
}

Fireplace.prototype.image = function() {
	return "images/fireplace.png"
}

//================================================

var Chest = function(position, contents) {
	this.position = position;
	this.contents = contents;
}

Chest.prototype.image = function() {
	return "images/chest_" + this.position +".png"
}

