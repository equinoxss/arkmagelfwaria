var Monster = function() {
}

Monster.prototype.canAttack = function() {
	return true;
}

Monster.prototype.canOpen = function() {
	return false;
}


var Skeleton = function(level) {
	$.extend(this, Monster.prototype)
	this.level = parseInt(level);
	this.hp = Math.ceil( Math.random() * 3 + (2 * this.level) );
}

Skeleton.prototype.image = function() {
	return "skeleton.png";
}

var Spider = function(level) {
	$.extend(this, Monster.prototype)
	this.level = parseInt(level);
	this.hp = Math.ceil( Math.random() * 3 + (3 * this.level) );
}

Spider.prototype.image = function() {
	return "spider.png";
}
