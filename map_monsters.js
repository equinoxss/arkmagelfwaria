var Skeleton = function(level) {
	this.level = parseInt(level);
	this.hp = Math.ceil( Math.random() * 3 + (2 * this.level) );
}

Skeleton.prototype.image = function() {
	return "images/skeleton.png";
}

var Spider = function(level) {
	this.level = parseInt(level);
	this.hp = Math.ceil( Math.random() * 3 + (3 * this.level) );
}

Spider.prototype.image = function() {
	return "images/spider.png";
}
