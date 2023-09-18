var currentOperation = "";
var previousInput = "";

// function numbers(value) {
//   currentInput += value;
//   document.getElementById("screen").value = currentInput;
// }

var currentInput = document.getElementById("screen");

function numbers(value) {
  var calculatorValue = currentInput.value;
  var operatorSign = ["+", "-", "%", "/", "*"];
  var last = calculatorValue[calculatorValue.length - 1];
  var newInput = value;

  if (
    operatorSign.indexOf(last) !== -1 &&
    operatorSign.indexOf(newInput) !== -1
  ) {
    calculatorValue = calculatorValue.slice(0, -1) + newInput;
  } else {
    calculatorValue += newInput;
  }

  currentInput.value = calculatorValue;
  var currentInput = "";
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
