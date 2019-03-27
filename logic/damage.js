const WEAPON = require('./weaponFunctions.js');

function calculateOffense(attacker) {
  if (attacker.weaponSet === 'undefined') {
    console.error('An error has occured.');
    return;
  } else if (attacker.weaponSet === 'dwDaggers') { //daggers attack twice with d4 dice
    return WEAPON.dwDagger(attacker);

  } else if (attacker.weaponSet === 'claws') { //claws attack 3 times with d4 dice
    return WEAPON.dwClaws(attacker);

  } else if (attacker.weaponSet === 'sword') { //single handed sword attack twice with d4 dice
    return WEAPON.sword(attacker);
  } else {
    console.log('attack missed');
  }
}

function calculateDamage(attacker, target) {
  let fo = calculateOffense(attacker); //final offense
  let fd = calculateDefense(target); //final defense
  let totalDamage = fo - fd;
  return Math.floor(totalDamage);
}



function calculateDefense(target) {
  let defense = target.defense + target.armor.stats.defense;
  console.log('DEF:' + defense);
  return defense;
}


function calculateCriticalDamage(attacker, target) {
  let dmg = calculateDamage(attacker, target);
  let critMod = 2;
  return dmg * critMod;
}

module.exports = {
  calculateDamage,
  calculateDefense,
  calculateOffense,
  calculateCriticalDamage
}