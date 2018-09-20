function pokemon(name, level, type, health, moves){
    this.name = name;
    this.level = level;
    this.type = type;
    this.health = health;
    this.moves = moves;
    this.perm = health;
    this.death = false;
}
pokemon.prototype.report = function(){
    if(this.death == true){
        console.log(this.name+" has fainted");
        return this;
    }
    console.log(this.name, "level " + this.level, this.type + " type", this.health+"HP", this.moves);
    return this;
}
pokemon.prototype.skullBash = function(){
    console.log(this.name + " is using skull bash");
    this.health -= 10;
    return this;
}
pokemon.prototype.peck = function(enemy){
    if(this.death == true){
        console.log(this.name+" must rest before attacking again");
        return this;
    } 
    console.log(enemy.name, enemy.health);
    console.log(this.name +" is pecking "+enemy.name);
    enemy.health-=1;
    console.log(enemy.name, enemy.health);
    return this;
}

pokemon.prototype.rest = function(){
    console.log(this.name +" used rest");
    console.log("zzzzzzzzz");
    this.health = this.perm;
    this.death = false;
    return this;
}

var charizard = new pokemon("Charizard", 100, "Fire", 120, {"flamethrower": 70, "fly": 55, "twist": 25, "fire blast": 100});
var zapdos = new pokemon("Zapdos", 47, "Electric", 80, {"thunder": 125, "thundershock": 60, "fly": 55, "drill peck": 80});
var mewtwo = new pokemon("Mewtwo", 200, "Psychic", 700, {"psyshock":80, "slam": 50, "rub": 20, "annihilate": 200});
// maybe get damage from move and only use move and enemy as parameters
// I could use numbers for the different moves
pokemon.prototype.attack = function(enemy, move){
    if(this.death == true){
        console.log(this.name+" must rest before attacking again");
        return this;
    }
    console.log(this.name+" used "+move);
    var damage = this.moves[move];
    console.log(this.name+" hitting enemy " +enemy.name + " with " + move + " for "+damage+" amount of damage");
    console.log(enemy.name+" was "+enemy.health +"HP");
    enemy.health -= damage;
    if(enemy.health <= 0){
        enemy.death = true;
        enemy.report();
        return this;
    }
    console.log(enemy.name+" now "+enemy.health +"HP");
    return this;
}
zapdos.report();
charizard.report();
mewtwo.report();
console.log("---");
// zapdos attacking charizard with general attack
zapdos.peck(charizard);
// zapdos attacking charizard with specific attack
zapdos.attack(charizard, "drill peck");
// charizard using rest to regenerate health
charizard.report().rest().report();
// charizard uses flamethrower on zapdos
charizard.attack(zapdos, "flamethrower");
// now I will attack zapdos again and then learn how to make it die at 0 health
mewtwo.attack(zapdos,"annihilate");
// zapdos is fainted, now lets try to attack, then regenerate and try again
zapdos.attack(mewtwo, "thunder");
zapdos.rest().attack(mewtwo,"thunder");
// Now let's have a turn based battle.  Mewtwo vs. the two birds
console.log('*******');

zapdos.report();
charizard.report();
mewtwo.report();

console.log('---------');
console.log('LET THE BATTLE BEGIN');
console.log('---------');

charizard.attack(mewtwo, "fire blast");
zapdos.attack(mewtwo, "thundershock").attack(mewtwo,"fly");
mewtwo.attack(zapdos, "annihilate");
charizard.attack(mewtwo, "flamethrower");
zapdos.rest();
mewtwo.attack(charizard, "psyshock").attack(zapdos, "rub");
charizard.attack(mewtwo, "flamethrower");
zapdos.attack(mewtwo, "thunder");
mewtwo.attack(zapdos, "slam");
zapdos.attack(mewtwo, "fly");
charizard.attack(mewtwo, "twist");
mewtwo.attack(charizard, "psyshock").attack(zapdos, "rub");
zapdos.peck(mewtwo);
charizard.peck(mewtwo);

var tauros = new pokemon("Tauros", 59, "Normal", 60, {"stomp": 20, "flame charge": 40, "taunt": 0});
tauros.attack(mewtwo, "flame charge");
mewtwo.attack(tauros, "annihilate");
tauros.attack(mewtwo, "taunt");

console.log('---------');
console.log('LET THE BATTLE END');
console.log('---------');

zapdos.report();
charizard.report();
mewtwo.report();
tauros.report();