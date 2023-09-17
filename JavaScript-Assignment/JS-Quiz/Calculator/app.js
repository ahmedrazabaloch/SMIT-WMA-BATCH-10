var currentInput = "";
var currentOperation = "";
var previousInput = "";

// var previousInput = "";

// var currentInput = "";

// var last = previousInput[previousInput.length - 1];

// var currentOperation = ["+", "-", "*", "/"];

// if (
//   currentOperation.indexOf(last) !== -1 &&
//   currentOperation.indexOf(newInput) !== -1
// ) {
//   previousInput = previousInput.slice(0, -1) + currentInput;
// } else {
//   previousInput += currentInput;
// }


function numbers(value) {
  currentInput += value;
  document.getElementById("screen").value = currentInput;
}

function operationSign(value) {
  currentOperation = value;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById("screen").value =
    previousInput + currentOperation + currentInput;
}

function sum() {
  var result = 0;
  var num1 = parseFloat(previousInput);
  var num2 = parseFloat(currentInput);

  if (currentOperation === "+") {
    result = num1 + num2;
  } else if (currentOperation === "-") {
    result = num1 - num2;
  } else if (currentOperation === "*") {
    result = num1 * num2;
  } else if (currentOperation === "/") {
    result = num1 / num2;
  }

  document.getElementById("screen").value = result;
  currentInput = result.toString();
  previousInput = "";
  currentOperation = "";
}

function clearScreen() {
  currentInput = "";
  currentOperation = "";
  previousInput = "";
  document.getElementById("screen").value = "";
}
