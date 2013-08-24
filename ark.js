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
		window.player = new Player(character, 1, 1);

		$(".character-picture").addClass(player.imageClass());
		drawPlayerStats();
		drawPlayerHealth();
		drawPlayerWearing();
	}

	drawPlayerStats = function() {
		$("#attack").text(player.attack.join("-"));
		$("#defense").text(player.defense);
		$("#agility").text(player.agility);
		$("#intelligence").text(player.intelligence);
		$("#experience").text(player.experience);
		$("#magicpts").text(player.mp);
	}

	drawPlayerHealth = function() {
		$("#hp").css('width', player.hpPercentage() + "%").text(player.currentHp + " / " + player.hp);
		$("#mp").css('width', player.mpPercentage() + "%").text(player.currentMp + " / " +player.mp);
	}

	drawPlayerWearing = function() {
		$("#head")[0].src = player.worn.head ? "images/"+ player.worn.head.image() : null;
		$("#body")[0].src = player.worn.body ? "images/"+ player.worn.body.image() : null;
		$("#feet")[0].src = player.worn.feet ? "images/"+ player.worn.feet.image() : null;
		$("#right-hand")[0].src = player.worn.right ? "images/"+ player.worn.right.image() : null;
		$("#left-hand")[0].src = player.worn.left ? "images/"+ player.worn.left.image() : null;
	}

	drawPlayerInventory = function() {

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
		//map.shift(player, dx, dy);
		if (map.move(player, dx,dy)) {
			map.adjustView(player);
			map.draw();
		}
	});

	$(".map").on("click", ".node img", function(event) {
		var coords = $(this).parent()[0].dataset.coords.split(","),
			clickX = parseInt(coords[0]),
			clickY = parseInt(coords[1]),
			recipient = mapData[clickY][clickX].layer1;
		if (recipient) {
			console.log(player.x, clickX, player.y, clickY, Math.abs(player.x - clickX) + Math.abs(player.y - clickY));
			if (Math.abs(player.x - clickX) + Math.abs(player.y - clickY) == 1) {
				if (recipient.canAttack && recipient.canAttack()) {
					attack(recipient);
				} else if (recipient.canOpen && recipient.canOpen()) {
					openContainer(recipient);
				}
			} else {
				
			}
		}
	});

	attack = function(monster) {
		console.log(monster.image());
	}

	openContainer = function(container) {
		console.log(container.image());
	}

});