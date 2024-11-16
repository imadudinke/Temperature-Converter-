"use strict";
const headerTitle = document.querySelector(".header__text");
const cursor = document.querySelector(".cursor__place");
const select = document.querySelectorAll("select");
const dataA = document.querySelector(".a");
const dataB = document.querySelector(".b");
const convertBtn = document.querySelector("button");
const inputPlace = document.querySelector(".num__input");
const numDisplay = document.querySelector(".num__display");
let index = 0,
  a = dataA.value,
  b = dataB.value,
  x;

//Functions
const calcTemp = function () {
  if (a === "C" && b === "F")
    return (numDisplay.value = +inputPlace.value * (9 / 5) + 32);
  if (a === "F" && b === "C")
    return (numDisplay.value = (+inputPlace.value - 32) * (5 / 9));
  if (a === "C" && b === "K")
    return (numDisplay.value = +inputPlace.value + 273.15);
  if (a === "K" && b === "C")
    return (numDisplay.value = +inputPlace.value - 273.15);
  if (a === "F" && b === "K")
    return (numDisplay.value = (+inputPlace.value - 32) * (5 / 9) + 273.15);
  if (a === "K" && b === "F")
    return (numDisplay.value = (+inputPlace.value - 273.15) * (9 / 5) + 32);
  if (a === b) return (numDisplay.value = inputPlace.value);
};
//

const headerText = "Effortless Temperature conversion at your fingertips!🧪";
function type() {
  if (index < headerText.length) {
    headerTitle.textContent += headerText.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
type();

select.forEach(function (el) {
  el.addEventListener("change", function () {
    inputPlace.value = "";
    numDisplay.value = "";

    if (el.classList.contains("a")) {
      a = this.value;
      inputPlace.placeholder = "⁰" + this.value;
    } else {
      b = this.value;
      numDisplay.placeholder = "⁰" + this.value;
    }
  });
});
convertBtn.addEventListener("click", function () {
  calcTemp();
});
