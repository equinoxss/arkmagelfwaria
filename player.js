var Player = function(character) {
	this.character = character;

	if (character == "warrior") {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
	} else if (character == "elf") {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
	} else {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
	}
}

Player.prototype.imageClass = function() {
	return this.character + "2";
}