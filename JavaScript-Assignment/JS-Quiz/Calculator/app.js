var currentInput = "";
var currentOperation = "";
var previousInput = "";

function numbers(value) {
  currentInput += value;
  document.getElementById("screen").value = currentInput;
}

function operationSign(value) {
  currentOperation = value;
  previousInput = currentInput;
  document.getElementById("screen").value = previousInput + currentOperation;
  currentInput = "";
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

