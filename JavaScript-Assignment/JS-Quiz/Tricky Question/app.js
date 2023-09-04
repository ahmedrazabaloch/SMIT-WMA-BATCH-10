// Palindrome words

// var userInput = prompt("Enter a word");

// var check = "";

// for (var i = userInput.length - 1; i >= 0; i--) {
//   check += userInput[i];
// }

// if (userInput === check) {
//   alert(userInput + " Its a palindrome word");
// } else {
//   alert("Try again for palindrome word");
// }

// Missing Number Found

// var num = [20, 21, 22, 23, 25,26,27,28,30];

// for (var i = 0; i < num.length; i++) {
//   if (num[i + 1] - num[i] ===2 ) {
//     console.log(num[i]+1);
//   }
// }

// Sorting Even & Odd Number

// var numCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < numCheck.length; i++) {
//   if (numCheck[i] % 2 === 0) {
//     console.log(numCheck[i]);
//   }
// }

// Max & Min Number

// var number = [4, 8, 16, 40, 12, 3, 5];

// var max = number[0];

// var min = number[0];

// for (let i = 0; i < number.length; i++) {
//   if (number[i] > max) {
//     max = number[i];
//   }

//   if (number[i] < min) {
//     min = number[i];
//   }
// }
// console.log("Maximum Number = " + max);
// console.log("Minimum Number = " + min);

// Swting Name & update array

// var arr = ["ghous", "ahmed", "zain"];

// arr[2] = [arr[0],arr[2]]

// console.log(arr)

// update = text.slice(21,24);

// var text =
//   "IHC reserves verdict on Imrans plea challenging Toshakhana conviction";

// var firstChar = text.slice(21,7);
// if (firstChar !== -1) {
//   text = text.slice(21, firstChar) + "Nawaz " + text.slice(firstChar + 0);
// }

// console.log(text);

// Methods

// .push()  & unshift return the orignal value with update

// .push() add the value in last

// var arr = ["salman", "ali"];

// arr.push("ahmed");
// console.log(arr);

// // unshift() add the value in first
// var a = ["salman", "ali"];

// a.unshift("ahmed");
// console.log(a);

// var arr = ["salman", "ali"];

// arr.pop();
// console.log(arr);

//>>>>>>>>>>>>>>> Ramdom Password generator <<<<<<<<<<<<<<<<<

// var num = [Math.floor(Math.random() * 100 * 100)];
// var word = ["abc", "ABC"];
// var symbol = ["@", "$"];

// if (num > 5000) {
//   var pass = num + symbol[0] + word[1];
//   document.write(pass);
// } else if (num < 5000) {
//   var pass = word[0] + symbol[1] + num;
//   document.write(pass);
// }

// var paas = "abcDEH@#$";
// var generatePass = "";
// for (i = 0; i < paas.length; i++) {
//   var pass = paas[Math.floor(Math.random() * paas.length)];
//   generatePass += pass;
// }
// document.write(generatePass);
