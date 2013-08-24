var Player = function(character, x, y) {
	this.character = character;
	this.experience = 0;
	this.x = x;
	this.y = y;

	mapData[y][x].layer1 = this;

	if (character == "warrior") {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.hp = this.currentHp = 8;
		this.mp = this.currentMp = 2;
		this.hpRecoveryRate = 0.1;
		this.mpRecoveryRate = 0.01;
		this.worn = {
			head: null,
			body: new Tunic(),
			feet: new LeatherSandals(),
			left: null,
			right: new ShortSword()
		}
	} else if (character == "elf") {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.hp = this.currentHp = 6;
		this.mp = this.currentMp = 4;
		this.hpRecoveryRate = 0.07;
		this.mpRecoveryRate = 0.25;
		this.worn = {
			head: null,
			body: new Tunic(),
			feet: new LeatherSandals(),
			left: null,
			right: new ShortSword()
		}
	} else {
		this.attack = [1,10];
		this.defense = 10;
		this.agility = 10;
		this.intelligence = 10;
		this.hp = this.currentHp = 4;
		this.mp = this.currentMp = 8;
		this.hpRecoveryRate = 0.05;
		this.mpRecoveryRate = 0.5;
		this.worn = {
			head: null,
			body: new Robe(),
			feet: new LeatherSandals(),
			leftHand: null,
			rightHand: new WalkingStaff()
		}
	}

	this.inventory = new Array(10);
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

Player.prototype.move = function(dx,dy) {

}