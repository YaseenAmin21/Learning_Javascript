const user = {
  username: "Yaseen",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    // console.log("This Points on:::", this);
  },
};

// user.welcomeMessage();
// user.username = "Amin";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Yaseen Maredia";
//   console.log(this.username);
// }
// chai();

const chai = () => {
  let username = "Yaseen Maredia";
  console.log(this.username);
};

console.log(this);

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({ username: "Yaseen" });

// console.log(addTwo(3, 4));
// console.log(addTwo(3, 4).username);

const myArray = [2, 5, 3, 7, 8];

myArray.forEach((e) => {
  console.log(e);
});
