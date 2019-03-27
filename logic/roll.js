function rollMultiple(amt, type) {
  for (let i = 0; i < amt; i++) {
    roll(type);
  }
}

//rolls one dice returns the result as a number.
function roll(dice) {
  if (dice.sides <= 3) {
    console.error('Incorrect side number.');
    return null;
  }
  let roll = Math.floor(Math.random() * dice.sides) + 1;
  return roll;
}


module.exports = {
  roll,
  rollMultiple
}