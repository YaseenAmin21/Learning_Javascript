console.log("Y");
console.log("A");
console.log("S");
console.log("E");
console.log("E");
console.log("N");

function sayMyName() {
  console.log("Y");
  console.log("A");
  console.log("S");
  console.log("E");
  console.log("E");
  console.log("N");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
}

const result = addTwoNumbers(3, 5);
console.log("Result", result);

function loginUserMessage(username = "same") {
  if (username === undefined) {
    console.log("Plase enter username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Yaseen"));
