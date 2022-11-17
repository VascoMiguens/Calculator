const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousDisplay = document.querySelector("[data-previous]");
const currentDisplay = document.querySelector("[data-current]");

let previous = "";
let current = "";
let hasDecimals = false;
let lastOperation = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //pass the nuber clicked
    addNumber(button.innerHTML);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //pass the operator clicked
    checkOperator(button.innerHTML);
  });
});

var addNumber = (number) => {
  //if the button clicked is a "." and hasDecimals is false
  if (number === "." && !hasDecimals) {
    hasDecimals = true;
    //if the button clicked is a "." and hasDecimals is true
  } else if (number === "." && hasDecimals) {
    return ``;
  }
  //add button clicked to current display
  current += number;
  currentDisplay.innerHTML = current;
};

var checkOperator = (operator) => {
  //if the current is undefined
  if (!current) return;
  hasDecimals = false;
  //save the operator clicked
  const operationName = operator;
  //if all elements are present do the operation
  if (previous && current && lastOperation) {
    operation();
    //if not convert the string into a floating point number and pass it to the result
  } else {
    result = parseFloat(current);
  }
  //update the display and pass the current operator
  updateDisplay(operationName);
};

var updateDisplay = (name) => {
  //if no operator is passed
  if (name === undefined) {
    previous += current + " =";
    //if the operator is passed
  } else {
    previous += current + " " + name + " ";
  }
  previousDisplay.innerHTML = previous;
  currentDisplay.innerHTML = "";
  current = "";
};
