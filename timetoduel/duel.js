class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
        
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} is attacking ${target.name}`)
    }
}


class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        console.log(`${this.name} effect has been used on ${target.name}`);
        target[this.stat] += this.mag
    }
}

// Creating Unit Cards
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Creating Effect Cards
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "res", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Turn 1.
console.log(redBeltNinja);
hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

// Turn 2.
console.log(blackBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja);

// Turn 3.
pairProgramming.play(redBeltNinja);
console.log(blackBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);