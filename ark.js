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
		window.map = new Map();
		map.draw();
	}

	// Game loop functions

	$(document).keypress(function(event){
		var dx = 0, dy = 0;
		switch (event.charCode) {
			case 119: dy -= 1; break;
			case 100: dx += 1; break;
			case 115: dy += 1; break;
			case 97: dx -= 1; break;
		}
		map.shift(dx, dy);
		map.draw();
	});

});