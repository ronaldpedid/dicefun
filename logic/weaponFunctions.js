const ROLL = require('./roll');
const DICE = require('../data/DiceSets');

function dwDagger(attacker) {
  let r1 = ROLL.roll(DICE.dwDaggerSet.dagger1);
  let r2 = ROLL.roll(DICE.dwDaggerSet.dagger2);
  let str = attacker.str;
  let attack = attacker.weapon1.stats.attackPW + attacker.weapon2.stats.attackPW;
  let result = (r1 + r2) + str + attack;
  console.log('daggers dmg: ' + result);
  return result;
}

function dwClaws(attacker) {
  let r1 = ROLL.roll(DICE.clawSet.claw1);
  let r2 = ROLL.roll(DICE.clawSet.claw2);
  let r3 = ROLL.roll(DICE.clawSet.claw3);
  let str = attacker.str;
  let attack = attacker.weapon1.stats.attackPW + attacker.weapon2.stats.attackPW;
  let result = (r1 + r2 + r3) + str + attack;
  console.log('claw dmg: ' + result);
  return result;
}

function sword(attacker) {
  let r1 = ROLL.roll(DICE.dwDaggerSet.dagger1);
  let str = attacker.str;
  let attack = attacker.weapon1.stats.attackPW;
  let result = r1 + +str + attack;
  console.log('sword dmg: ' + result);
  return result;
}

module.exports = {
  dwDagger,
  dwClaws,
  sword
}