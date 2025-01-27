// while (condition) {
// }
let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

let myArray = ["Flash", "batman", "Superman"];
let i = 0;
while (myArray.length > i) {
  console.log(`Value is ${myArray[i]}`);
  i++;
}

let score = 1;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
