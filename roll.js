let roll = require("./dice.js");

let dieSides = 20;
let numberOfDice = 1;
let result = roll(dieSides, numberOfDice);

console.log(`You rolled a ${dieSides} sided die ${numberOfDice} time(s), and got a ${result}`)
