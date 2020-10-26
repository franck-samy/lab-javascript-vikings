// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    };
    receiveDamage(damage) {
        this.health -= 50;
    };

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super();
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    battleCry() {
        return "Odin Owns You All!"
    };
    receiveDamage(damage) {
        this.health -= 50;
        if (this.health == undefined) {
            return ("`${name}` has died in act of combat");
        }
        if (this.health > 0) {
            return ("`${name}` has received 50 points of damage");

        }

    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= 50;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = []
    }
    addViking(viking) {
        return;
    };

    addSaxon(saxon) { }
    vikingAttack() {
        saxon[receiveDamage] = viking[strength];
    }
}
