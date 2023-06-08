class Ninja {
    constructor(name, health=10, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this
    }
    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
        return this
    }
    drinkSake() {
        this.health+=10;
        console.log(`${this.name} drank some sake. Health is now ${this.health}.`)
        return this
    }
}

const ninja1 = new Ninja("Katie");
ninja1.showStats();
ninja1.sayName();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10){
        super(name, health, speed, strength);
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Wise message")
    }
}

const Danny = new Sensei("Danny");
Danny.speakWisdom();
Danny.showStats();