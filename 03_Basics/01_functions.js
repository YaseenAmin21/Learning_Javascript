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

function calCulateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calCulateCartPrice(200, 400, 500));

const user = {
  username: "Yaseen",
  price: 199,
};

function handleObject({ username, price }) {
  console.log(`Username is ${username} and price is ${price}`);
}

// handleObject(user);
handleObject({
  username: "YaseenAmin",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
