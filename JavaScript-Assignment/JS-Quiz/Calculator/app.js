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

// function calculate() {
//   let result = 0;
//   const num1 = parseFloat(previousInput);
//   const num2 = parseFloat(currentInput);

//   switch (currentOperation) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         result = "Error: Division by zero";
//       }
//       break;
//     default:
//       result = "Error: Invalid operation";
//   }

//   document.getElementById("screen").value = result;
//   currentInput = result.toString();
//   previousInput = "";
//   currentOperation = "";
// }

function clearScreen() {
  currentInput = "";
  currentOperation = "";
  previousInput = "";
  document.getElementById("screen").value = "";
}
