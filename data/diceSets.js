const DiceData = require('./dice.json');

let diceBox = {
  d4: DiceData[0],
  d6: DiceData[1],
  d8: DiceData[2],
  d10: DiceData[3],
  d12: DiceData[4],
  d20: DiceData[5]
};

//use these dice for greataxe attacks
let greatAxeSet = {
  atk1: diceBox.d6,
  atk2: diceBox.d6
};

let clawSet = {
  claw1: diceBox.d4,
  claw2: diceBox.d4,
  claw3: diceBox.d4,
}
//use these dice for duel wielding dagger attacks
let dwDaggerSet = {
  dagger1: diceBox.d4,
  dagger2: diceBox.d4
};

//use these dice for duel wielding sword attacks
let dwSwordSet = {
  sword1: diceBox.d8,
  sword2: diceBox.d8
};

//use these dice for mixed duel weilding sword/dagger attacks
let dwMixedDSSet = {
  sword1: diceBox.d8,
  dagger1: diceBox.d4
};

//use these dice for basic magic attacks
let magicDiceSet = {
  roll1: diceBox.d10,
  roll2: diceBox.d10
};

//use these dice for advanced magic attacks
let heavyMagicDiceSet = {
  roll1: diceBox.d12,
  roll2: diceBox.d12,
  roll3: diceBox.d12
}

let daggerDice = {
  dagger: diceBox.d4
}

let swordDice = {
  sword: diceBox.d8
}
module.exports = {
  diceBox,
  greatAxeSet,
  dwDaggerSet,
  dwSwordSet,
  dwMixedDSSet,
  magicDiceSet,
  heavyMagicDiceSet,
  clawSet,
  daggerDice,
  swordDice
}