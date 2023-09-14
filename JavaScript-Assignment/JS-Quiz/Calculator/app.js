var currentInput = "";
var currentOperation = "";
var previousInput = "";

function numbers(value) {
  currentInput += value;
  document.getElementById("screen").value = currentInput;
}

function operationSign(value) {
  currentInput += value;
  document.getElementById("screen").value = currentInput;
}

function clearScreen() {
  currentInput = "";
  currentOperation = "";
  previousInput = "";
  document.getElementById("screen").value = "";
}

function sum() {
  if (currentInput === "+") {
    var result = currentInput + currentInput;
  }
  document.getElementById("screen").value = result;
}
