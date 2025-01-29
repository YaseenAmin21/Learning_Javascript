// For of

const myArray = [1, 2, 3, 4, 5];

// for (let a of myArray) {
//   console.log(a);
// }

// for (let a in myArray) {
//   console.log(typeof a);
// }

const greeting = "Hello World";

// for (const greet of greeting) {
//   console.log(`Each char is ${greet}`);
// }

// Maps
const newMap = new Map();

newMap.set("IN", "India");
newMap.set("USA", "United States of America");
newMap.set("Fr", "Frances");
newMap.set("PAK", "Pakistan");

// console.log(newMap);

for (const [key, value] of newMap) {
  console.log(key, value);
}

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// for (const [key, value] of Object.entries(myObject)) {
//   console.log(key, value);
// }
