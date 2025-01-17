//  Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Yaseen",
  "full-name": "Yaseen Amin Maredia",
  [mySym]: "mykey1",
  age: 18,
  location: "karachi",
  email: "yaseen@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Dot Notation
console.log(JsUser.name);
console.log(JsUser.age);

// Bracket Notation
// console.log(JsUser["name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[`full-name`]);

// console.log(typeof JsUser[mySym]);

JsUser.email = "yaseenaminmaredia@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "yaseenaminmaredia@microsoft.com";

// console.log(JsUser.email);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

JsUser.greeting();
JsUser.greetingTwo();
