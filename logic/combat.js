const CharData = require('../data/chara.json');
const EnemyData = require('../data/enemy.json');
const DiceSets = require('../data/diceSets.js')
const DAMAGE = require('./damage.js');
const ROLL = require('./roll.js');

//stephen's tips
//you roll a d20 and add your strength mod (it may change to dex mod depending on the weapon)
//and if you are proficient in the weapon you get to add your proficiency bonus. then all of those are
//added together and compared to the targets AC if the total is equal or greater than the ac you hit
// so if
// d20+str mod+prof bonus >= target ac
// you hit
//damage is determined by the weapon

let charaData = {
  donglos: CharData[0]
};

let enemyData = {
  darkBeast: EnemyData[0]
};



//takes the returned roll number and calculate it against an armor rating to determine hit or miss
//d20 needs to be passed in as rollMultiple(numOfDice, diceSet.diceBox.d20) or roll(diceSet.d20)
function isHit(d20, attacker, target, offense, defense) {
  if (d20 === 20) {
    console.log('CRITICAL HIT!');
    let dmg = DAMAGE.calculateCriticalDamage(attacker, target);
  }
  if (d20 === 1) {
    console.log('CRITICAL MISS!');
    return 0;
  }
  if (d20 * offense >= defense) {
    console.log('Hit!');
    let dmg = DAMAGE.calculateDamage(attacker, target);
    console.log('DMG: ' + dmg);

  } else {
    console.log('missed');
    return 0;
  }
}

//to determine the the hit we are going to roll 1 20 sided dice.
// If the dice lands on 20, it's automatically a critical hit. If the dice lands on 1 it's a critical miss.
function attack(attacker, target) {
  console.log(attacker.name + ' attacks ' + target.name);
  let rolld20 = ROLL.roll(DiceSets.diceBox.d20);
  isHit(rolld20, attacker, target, attacker.str, target.defense);

}

attack(charaData.donglos, enemyData.darkBeast);
attack(enemyData.darkBeast, charaData.donglos);