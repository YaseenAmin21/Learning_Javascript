const start = document.getElementById("start");
const stop = document.getElementById("stop");
// const randomFunc = function () {
//   return Math.trunc(Math.random() * 255 + 1);
// };

const body = document.body;
let startID = null;

// // body.style.backgroundColor = "red";

// start.addEventListener("click", function () {
//   startID = setInterval(function () {
//     body.style.backgroundColor = `rgb(${randomFunc()},${randomFunc()},${randomFunc()})`;
//   }, 1000);
// });

// stop.addEventListener("click", function () {
//   clearInterval(startID);
//   body.style.backgroundColor = "#212121";
// });

// =========================================
start.addEventListener("click", function () {
  console.log(startID);
  if (startID) return; // Prevent multiple intervals
  console.log(startID);
  console.log("Interval Created");
  startID = setInterval(function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.trunc(Math.random() * hex.length)];
    }
    console.log(color);
    body.style.backgroundColor = color;
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(startID);
  startID = null;
  body.style.backgroundColor = "#212121";
});
