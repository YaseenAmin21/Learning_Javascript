//=========== Primitive ===========

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, bigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const bigNumber = 212132165464894984984543516584984651651n;
// console.log(bigNumber);

//=========== Reference Type (Non primitive) ===========

// Arrays, Objects, Function

const hero = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Yaseen",
  age: 26,
};

const myFnction = function () {
  console.log("Hello World");
};

// myFnction();

// console.log(typeof bigNumber); // bigint
// console.log(typeof Object); // function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primative)

let myYoutubeName = "YaseenAminMarediadotcom";

let anotherName = myYoutubeName;
anotherName = "AminMaredia";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "yaseen@google.com";

console.table([userOne, userTwo]);
