//                                                   >>>>>>>>>>>>>>>>>>> Palindrome words <<<<<<<<<<<<<<<<<<<<<<<

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

//                                                     >>>>>>>>>>>>> Missing Number Found <<<<<<<<<<<<<

// var num = [20, 21, 22, 23, 25,26,27,28,30];

// for (var i = 0; i < num.length; i++) {
//   if (num[i + 1] - num[i] ===2 ) {
//     console.log(num[i]+1);
//   }
// }

//                                              >>>>>>>>>>>>>>>>>>>> Sorting Even & Odd Number <<<<<<<<<<<<<<<<<<<<<<<<<

// var numCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < numCheck.length; i++) {
//   if (numCheck[i] % 2 === 0) {
//     console.log(numCheck[i]);
//   }
// }

//                                                 >>>>>>>>>>>>>>>>>> Max & Min Number <<<<<<<<<<<<<<<<<<<

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

//                                          >>>>>>>>>>>>>>>>>>>>> Switching Name & update array <<<<<<<<<<<<<<<<<<<<<<<<<

// var arr = ["ghous", "ahmed", "zain"];

// (arr[2] = [arr[0], (arr[0] = arr[2])]), [0];

// console.log(arr)

//                                               >>>>>>>>>>>>>>> Ramdom Password generator <<<<<<<<<<<<<<<<<

// var paas = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
// var generatePass = "";
// for (i = 0; i < 12; i++) {
//   var pass = paas[Math.floor(Math.random() * paas.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

// var password = ["ABCD", "abcd", "!@#$"];
// var generatePass = "";
// for (i = 0; i < password.length; i++) {
//   var pass = password[Math.floor(Math.random() * password.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

//                                            >>>>>>>>>>>>>>> Birth Days Calculator <<<<<<<<<<<<<<<<<<

// var userName=prompt("Please enter your name");

// var dob = new Date(prompt("Enter your date Bith like this","Mar-23-1995"));

// var currentDate = new Date();

// var newDates = currentDate - dob;

// var days = newDates / 86400000;

// var hours = days * 24;

// var month = Math.floor(days) / 30.417;

// var minutes = newDates / 60;

// var years= month / 12

// document.write(userName + " Now you are  " + years.toFixed(1) + "old");
// document.write("<br/>");
// document.write("<br/>Date of Birth: => " + "    " + dob);
// document.write("<br/>");
// document.write("<br/> Current Date: => " + "    " + currentDate);
// document.write("<br/>");
// document.write("<br/> Total Month: => " + "    " + month.toFixed(1));
// document.write("<br/>");
// document.write("<br/> Total Days: => " + "    " + days.toFixed(1));
// document.write("<br/>");
// document.write("<br/> Total Hours: => " + "    " + hours.toFixed(2));
// document.write("<br/>");
// document.write("<br/> Total Minutes: => " + "    " + Math.round(minutes));

//                                                   >>>>>>>>>>>>>>> Birth Days Calculator <<<<<<<<<<<<<<<<<<

//                                                   >>>>>>>>>>>>>>>>>>> Palindrome words <<<<<<<<<<<<<<<<<<<<<<<

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

//                                                     >>>>>>>>>>>>> Missing Number Found <<<<<<<<<<<<<

// var num = [20, 21, 22, 23, 25,26,27,28,30];

// for (var i = 0; i < num.length; i++) {
//   if (num[i + 1] - num[i] ===2 ) {
//     console.log(num[i]+1);
//   }
// }

//                                              >>>>>>>>>>>>>>>>>>>> Sorting Even & Odd Number <<<<<<<<<<<<<<<<<<<<<<<<<

// var numCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var i = 0; i < numCheck.length; i++) {
//   if (numCheck[i] % 2 === 0) {
//     console.log(numCheck[i]);
//   }
// }

//                                                 >>>>>>>>>>>>>>>>>> Max & Min Number <<<<<<<<<<<<<<<<<<<

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

//                                          >>>>>>>>>>>>>>>>>>>>> Switching Name & update array <<<<<<<<<<<<<<<<<<<<<<<<<

// var arr = ["ghous", "ahmed", "zain"];

// (arr[2] = [arr[0], (arr[0] = arr[2])]), [0];

// console.log(arr)

//                                               >>>>>>>>>>>>>>> Ramdom Password generator <<<<<<<<<<<<<<<<<

// var paas = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
// var generatePass = "";
// for (i = 0; i < 12; i++) {
//   var pass = paas[Math.floor(Math.random() * paas.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

// var password = ["ABCD", "abcd", "!@#$"];
// var generatePass = "";
// for (i = 0; i < password.length; i++) {
//   var pass = password[Math.floor(Math.random() * password.length)];
//   generatePass += pass;
// }
// document.write(generatePass);

//                                            >>>>>>>>>>>>>>> Birth Days Calculator <<<<<<<<<<<<<<<<<<

// var userName=prompt("Please enter your name");

// var dob = new Date(prompt("Enter your date Bith like this","Mar-23-1995"));

// var currentDate = new Date();

// var newDates = currentDate - dob;

// var days = newDates / 86400000;

// var hours = days * 24;

// var month = Math.floor(days) / 30.417;

// var minutes = newDates / 60;

// var years= month / 12

// document.write(userName + " Now you are  " + years.toFixed(1) + "old");
// document.write("<br/>");
// document.write("<br/>Date of Birth: => " + "    " + dob);
// document.write("<br/>");
// document.write("<br/> Current Date: => " + "    " + currentDate);
// document.write("<br/>");
// document.write("<br/> Total Month: => " + "    " + month.toFixed(1));
// document.write("<br/>");
// document.write("<br/> Total Days: => " + "    " + days.toFixed(1));
// document.write("<br/>");
// document.write("<br/> Total Hours: => " + "    " + hours.toFixed(2));
// document.write("<br/>");
// document.write("<br/> Total Minutes: => " + "    " + Math.round(minutes));

//                                                   >>>>>>>>>>>>>>> Birth Days Calculator <<<<<<<<<<<<<<<<<<

// var ramdan = new Date("Mar 12 2024");

// var currentDate = new Date();

// var milliSeconds = ramdan - currentDate;

// var days = milliSeconds / 86400000;

// var hours = days * 24;

// var month = Math.floor(days) / 30.417;

// var minutes = milliSeconds / 60;

// console.log(days);

// document.write("<h1>How Many Days left Ramadan 2024</h1>");
// document.write("<br/>Ramadan: => " + " " + ramdan);
// document.write("<br/>");
// document.write("<br/> Current Date: => " + " " + currentDate);
// document.write("<br/>");
// document.write("<br/> Month left: => " + " " + month.toFixed(1));
// document.write("<br/>");
// document.write("<br/> Days left: => " + " " + days.toFixed(1));
// document.write("<br/>");
// document.write("<br/> Hours left: => " + " " + hours.toFixed(2));
// document.write("<br/>");
// document.write("<br/> Minutes left: => " + " " + Math.round(minutes));

//                                                    >>>>>>>>>>>>>>>>>> Another birth days counter <<<<<<<<<<<<<<<<<

// var dateOfBirth = new Date(prompt("Enter your birth date", "Mar 23 1995"));

// var currentDate = new Date();

// var milliseconds = currentDate.getTime() - dateOfBirth.getTime();

// var minutes = milliseconds / 60;

// var days = milliseconds / 86400000;

// var hours = days * 24;

// var month = Math.floor(days) / 30.417;

// var years = currentDate.getFullYear() - dateOfBirth.getFullYear();

// console.log(
//   years + " years",
//   month + " month",
//   days + " days",
//   hours + " hours",
//   minutes + " minutes"
// );
