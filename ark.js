$(document).ready(function() {

	$(".character").click(function() {
		$(".start").addClass("hidden");
		$(".game").removeClass("hidden");

		startGame(this.dataset.character);
	})

	startGame = function(character) {
		window.player = new Player(character);

		$(".character-picture").addClass(player.imageClass());

		$("#attack").text(player.attack.join("-"));
		$("#defense").text(player.defense);
		$("#agility").text(player.agility);
		$("#intelligence").text(player.intelligence);
	}
});