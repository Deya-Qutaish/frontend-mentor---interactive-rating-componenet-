"use strict";

const submit = document.querySelector("button");
const windowOne = document.querySelector(".box-one");
const windowTwo = document.querySelector(".box-two");
const selection = document.querySelector(".selection");

function reset() {
  for (let i = 0; i < 5; i++) {
    const allNumbers = document.getElementById(`nmb#${i}`);
    allNumbers.style.backgroundColor = "hsla(216, 12%, 54%, 0.144)";
    allNumbers.style.color = "rgba(255, 255, 255, 0.377)";
  }
}

function submitting() {
  submit.addEventListener("click", function () {
    submit.style.backgroundColor = "white";
    submit.style.color = "hsl(25, 97%, 53%)";

    windowOne.classList.add("hidden");
    windowTwo.classList.remove("hidden");
  });
}

for (let i = 0; i < 5; i++) {
  const numbers = document.getElementById(`nmb#${i}`);

  numbers.addEventListener("click", function (e) {
    let target = e.target;

    if (e.target.textContent != 1) {
      reset();

      numbers.style.backgroundColor = "hsl(25, 97%, 53%)";
      numbers.style.color = "white";
      document.getElementById(`nmb#${i - 1}`).style.backgroundColor =
        "hsl(216, 12%, 54%)";

      selection.textContent = `You selected ${target.textContent} out of 5`;

      submitting();
    } else {
      reset();

      numbers.style.backgroundColor = "hsl(25, 97%, 53%)";
      numbers.style.color = "white";

      selection.textContent = `You selected ${target.textContent} out of 5`;

      submitting();
    }
  });
}
