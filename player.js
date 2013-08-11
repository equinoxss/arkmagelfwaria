var Player = function(character) {
	this.character = character;

	if (character == "warrior") {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.hp = 8;
		this.mp = 2;
		this.hpRecoveryRate = 0.1;
		this.mpRecoveryRate = 0.01;
	} else if (character == "elf") {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.hp = 6;
		this.mp = 4;
		this.hpRecoveryRate = 0.07;
		this.mpRecoveryRate = 0.25;
	} else {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.hp = 4;
		this.mp = 8;
		this.hpRecoveryRate = 0.05;
		this.mpRecoveryRate = 0.5;
	}
}

Player.prototype.image = function() {
	return this.character + ".png";
}

Player.prototype.imageClass = function() {
	return this.character + "2";
}

Player.prototype.hpPercentage = function() {
	return Math.round( (this.currentHp / this.hp) * 100 );
}

Player.prototype.mpPercentage = function() {
	return Math.round( (this.currentMp / this.mp) * 100 );
}

Player.prototype.takeDamage = function(amount) {
	this.currentHp -= amount;
	return !this.isDead();
}

Player.prototype.isDead = function() {
	return (this.currentHp <= 0);
}

Player.prototype.capStats = function() {
	this.currentHp = Math.max(this.currentHp, this.hp);
	this.currentMp = Math.max(this.currentMp, this.mp);	
}

Player.prototype.rest = function() {
	this.currentHp += this.hpRecoveryRate;
	this.currentMp += this.mpRecoveryRate;
	this.capStats();
}

Player.prototype.heal = function(amount) {
	this.currentHp += amount;
	this.capStats();
}