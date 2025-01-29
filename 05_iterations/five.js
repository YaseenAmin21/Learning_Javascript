const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// passing arrow function
// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "java",
    languageFileName: "java",
  },
  {
    language: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((items) => {
  console.log(items.language, "::", items.languageFileName);
});
