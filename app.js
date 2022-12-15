const body = document.querySelector(".img");
const btn = document.querySelector("button");
let number = Math.trunc(Math.random() * 20) + 1;
btn.addEventListener("click", function () {
  let span = document.querySelector(".span");
  let input = document.querySelector("input").value;
  if (input == number) {
    span.innerHTML = "You win🏆";
    body.innerHTML = "<img src='images/win.jpg'>";
  } else if (input > 20) {
    span.innerHTML = "Please enter a number from 0 to 20";
  } else if (input > number) {
    span.innerHTML = "Enter a smaller number";
    body.innerHTML = "<img src='./images/lose.webp'>";
  } else if (input < 0) {
    span.innerHTML = "Please enter a number from 0 to 20";
  } else if (input < number) {
    span.innerHTML = "Enter a larger number";
    body.innerHTML = "<img src='./images/lose.webp'>";
  }
});
