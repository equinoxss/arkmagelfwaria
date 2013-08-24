var MapNode = function(layer0, layer1, visited) {
	this.layer0 = layer0;
	this.layer1 = layer1;
	this.visited = true;
}

MapNode.prototype.setCoordinates = function(r,c) {
	this.y = r;
	this.x = c;
}