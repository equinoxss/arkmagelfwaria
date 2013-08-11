$(document).ready(function() {

	$(".character").click(function() {
		$(".start").addClass("hidden");
		$(".game").removeClass("hidden");

		startGame(this.dataset.character);
	})

	startGame = function(character) {
		initPlayer(character);
		initMap();
	}

	// Player functions

	initPlayer = function(character) {
		window.player = new Player(character);

		$(".character-picture").addClass(player.imageClass());
		drawPlayerStats();
		drawPlayerHealth();		
	}

	drawPlayerStats = function() {
		$("#attack").text(player.attack.join("-"));
		$("#defense").text(player.defense);
		$("#agility").text(player.agility);
		$("#intelligence").text(player.intelligence);
		$("#hitpts").text(player.hp);
		$("#magicpts").text(player.mp);
	}

	drawPlayerHealth = function() {
		$("#hp").css('width', player.hpPercentage() + "%").text(player.hp);
		$("#mp").css('width', player.mpPercentage() + "%").text(player.mp);
	}

	// Map functions

	initMap = function() {
		window.map = { viewX: 0, viewY: 0, viewW: 15, viewH: 13 };
		mapData[1][1].layer1 = player;
		drawMap();
	}

	drawMap = function() {
		var mapEl = $("#map"),
			node = null,
			top = 0,
			image = null;
			empty = new Empty();
		for (var y = map.viewY; y < map.viewY + map.viewH; y++) {
			top = y * 50 + 21;
			mapEl.append('<div class="row" style="top:' + top + 'px"></div>');
			row = mapEl.children().last();
			for (var x = map.viewX; x < map.viewX + map.viewW; x++) {
				row.append('<div class="node"></div>');
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

	// Game loop functions

});