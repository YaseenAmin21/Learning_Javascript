const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function () {
    body.style.backgroundColor = btn.getAttribute("id");
  });
});
