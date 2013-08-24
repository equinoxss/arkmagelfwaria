var Map = function() {
	this.viewX = 0;
	this.viewY = 0;
	this.viewW = 13;
	this.viewH = 13;
	this.viewHalf = 6;

	var widest = 0;
	for (var r = 0; r < mapData.length; r++) {
		widest = Math.max(widest, mapData[r].length);
		for (var c = 0; c < mapData[r].length; c++) {
			mapData[r][c].setCoordinates(r,c);
		}
	}

	this.mapW = widest;
	this.mapH = mapData.length;
}

Map.prototype.draw = function() {
	var mapEl = $("#map"),
		node = null,
		top = 0,
		image = null;
		empty = new Empty();
	mapEl.empty();
	for (var y = this.viewY; y < this.viewY + this.viewH; y++) {
		top = (y - this.viewY) * 50 + 21;
		mapEl.append('<div class="row" style="top:' + top + 'px"></div>');
		row = mapEl.children().last();
		for (var x = this.viewX; x < this.viewX + this.viewW; x++) {
			row.append('<div class="node" data-coords="' + [x,y].join(",") + '"></div>');
			cell = row.children().last();
			node = mapData[y][x];
			if (node && node.visited) {
				if (node.layer0) {
					cell.append('<img class="layer0" src="images/' + node.layer0.image() + '"/>');
				}
				if (node.layer1) {
					cell.append('<img class="layer1" src="images/' + node.layer1.image() + '"/>');
				}
			} else {
				cell.append('<img class="layer0" src="images/' +  empty.image() + '"/>');
			}
			
		}
	}
}

Map.prototype.shift = function(dx, dy) {
	this.viewX += dx;
	this.viewY += dy;

	console.log("shift", this.viewX, this.viewY);

	this.viewX = Math.min( Math.max(this.viewX, 0), this.mapW - this.viewW) ;
	this.viewY = Math.min( Math.max(this.viewY, 0), this.mapH - this.viewH) ;

	console.log("normed", this.viewX, this.viewY);
}

Map.prototype.move = function(object, dx, dy) {
	if (dx == 0 && dy == 0) return;

	var newX = object.x + dx,
			newY = object.y + dy,
			move = false,
			newLocation = mapData[newY][newX].layer1;	
	if (newLocation == null) {
		move = true;
	} else {
		var response = newLocation.collision();
		switch (response.condition) {
			case "solid":
				break;
			case "locked": 
				break;
			case "opened":
				return true;
				break;
			case "passthru":
				newX += dx;
				newY += dy;
				move = true;
				break;
		}
	}

	if (move) {
		mapData[object.y][object.x].layer1 = null;
		mapData[newY][newX].layer1 = object;
		object.x = newX;
		object.y = newY;
		return true;
	}

	return false;
}

Map.prototype.adjustView = function(object) {
	if (this.viewX + this.viewW - object.x < this.viewHalf) {
		this.shift(1,0);
	}
	else if (this.viewY + this.viewH - object.y < this.viewHalf) {
		this.shift(0,1);
	}
	if (object.x - this.viewX < this.viewHalf) {
		this.shift(-1,0);
	}
	else if (object.y - this.viewY < this.viewHalf) {
		this.shift(0,-1);
	}
}

