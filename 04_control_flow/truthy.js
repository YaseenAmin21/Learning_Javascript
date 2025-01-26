// const userEmail = "user@yaseen.com";
const userEmail = [];

if (userEmail) {
  console.log(userEmail);
} else {
  console.log("Don't have user email");
}

// ------ Truthy Values ------
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(42));
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean(new Date()));
console.log(Boolean(-42));
console.log(Boolean(12n));
console.log(Boolean(3.14));
console.log(Boolean(-3.14));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(function () {}));

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ------ Falsey Values ------

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
// console.log(Boolean(document.all));

//------------ Nullish coalescing operator (??) ------------

let val1;

val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;

console.log(val1);

//------------ Ternary conditional operator ------------

// Syntex
//  condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
