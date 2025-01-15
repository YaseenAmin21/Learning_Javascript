const name = "Yaseen";
const repoCount = 50;
// console.log(name + repoCount + " Value");

// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);
// String Object
const gameName = new String("Yaseen-AM");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("n"));
const newString = gameName.substring(0, 6);
// console.log(newString);

const anotherString = gameName.slice(-2, 9);
// console.log(anotherString);

const newStringOne = "    Yaseen    ";

console.log(newStringOne.trim());

const url = "https://yaseen.com/yaseen%20amin";

console.log(url.replace("%20", "-"));

console.log(url.includes("aseem")); // false

console.log(gameName.split("-"));
