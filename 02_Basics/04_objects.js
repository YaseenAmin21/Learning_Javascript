// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Yaseen";
tinderUser.isLoggedIn = false;

// console.table(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Yaseen",
      lastname: "Amim",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};

// const obj3 = { obj1, obj2 };
// console.log(obj3);

// const obj3 = Object.assign((target = {}), obj1, obj2);
// console.log(obj3);
// console.log(obj4 === target);

// Spread Operator for objects
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    email: "yaseen@google.com",
  },
  {
    id: 1,
    email: "yaseen@google.com",
  },
  {
    id: 1,
    email: "yaseen@google.com",
  },
  {
    id: 1,
    email: "yaseen@google.com",
  },
  {
    id: 1,
    email: "yaseen@google.com",
  },
  {
    id: 1,
    email: "yaseen@google.com",
  },
];

// console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return type is array
console.log(Object.values(tinderUser)); // return type is array
console.log(Object.entries(tinderUser)); // return type is array

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // True

// Destructuring In Objects

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "yaseen",
};

course.courseInstructor;

//  destruturing and rename the varaible
const { courseInstructor: instructor } = course;

console.log(instructor);

const navbar = ({ company }) => {
  console.log(company);
};

navbar({ company: "Yaseen" });

// JSON Respones Structure looks like....
// {
//   "name": "yaseen";
//   "coursename": "js in hindi";
//   "price": "free";
// }
[{}, {}, {}, {}, {}];
