const score = 400;
// console.log(score);
const balance = new Number(100);
// console.log(balance);
// console.log(typeof score, typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000;
// American standard
// console.log(hundreds.toLocaleString("en-IN"));
// Indian standard
// console.log(hundreds.toLocaleString("en-IN"));

// Max Value
// console.log(Number.MAX_VALUE);
// Min Value
// console.log(Number.MIN_VALUE);

// +++++++++++++++++++++++++ Math +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.sqrt(9));
// console.log(Math.min(8, 6, 199, 7, 5, 32, 11));
// console.log(Math.max(8, 6, 199, 7, 5, 32, 11));

// console.log(Math.trunc(Math.random() * 6) + 1); // dice roll
// console.log(Math.random() * 6);

const min = 1;
const max = 6;

const diceRoll = Math.trunc(Math.random() * max) + min;

console.log(diceRoll);
