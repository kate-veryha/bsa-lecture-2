class Fighter {

    constructor(name = 'No name', power = 5, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }


    setDamage(damage) {
        this.health -= damage;
        //added name to show
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy, point) { enemy.setDamage(point * this.power);}
}

class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point * 2)
    }
}

let showResult = (fighter, improvedFighter) => {
    console.log(
        `***Result***
${fighter.name}: ${(fighter.health > 0) ? fighter.health : 0}
${improvedFighter.name}: ${(improvedFighter.health > 0) ? improvedFighter.health : 0}`);
};

function fight(fighter, improvedFighter, ...point) {
    //show initial parameters
    console.log(`Fighter's name: ${fighter.name}, health: ${fighter.health}
Improved fighter's name: ${improvedFighter.name}, health: ${improvedFighter.health}`);
    let turn = 0;
    console.log(point);
    for (p of point) {
        if (turn % 2 == 0) {
            fighter.hit(improvedFighter, p)
        } else {
            improvedFighter.doubleHit(fighter, p)
        }
        if ((fighter.health <= 0) || (improvedFighter.health <= 0)) {
            showResult(fighter, improvedFighter);
            break;
        }
        turn++;
    }
}

let fighter = new Fighter('newbie', 20, 300);
let improvedFighter = new ImprovedFighter('experienced', 27, 280);
fight(fighter, improvedFighter,6,5,30,32,12,19,37,95);

