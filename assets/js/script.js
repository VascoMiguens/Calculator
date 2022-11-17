const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousDisplay = document.querySelector("[data-previous]");
const currentDisplay = document.querySelector("[data-current]");

let current = "";
let hasDecimals = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerHTML);
  });
});



var addNumber = (number) => {
  if (number === "." && !hasDecimals) {
    hasDecimals = true;
  } else if (number === "." && !hasDecimals) {
    return ``;
  }
  current += number;
  currentDisplay.innerHTML = current;
};
