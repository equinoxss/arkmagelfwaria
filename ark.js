$(document).ready(function() {

	$(".character").click(function() {
		$(".start").addClass("hidden");
		$(".game").removeClass("hidden");

		startGame(this.dataset.character);
	})

	startGame = function(character) {
		window.player = new Player(character);

		$(".character-picture").addClass(player.imageClass());

		$("#attack span").text(player.attack.join("-"));
		$("#defense span").text(player.defense);
		$("#agility span").text(player.agility);
		$("#intelligence span").text(player.intelligence);
	}
});