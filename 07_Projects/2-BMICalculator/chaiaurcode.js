const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = Number(document.querySelector("#height").value);
  const weight = Number(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  console.log(height);

  if (results === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (results === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  //   results.innerHTML = ` ${height}`;
});
