//                                           <<<<<<<<<<<<<< Chapter 21 to 25 >>>>>>>>>>>>>

//                                                          Question No- 01
// var firstName = prompt("Please Enter Your First Name");
// var lastName = prompt("Please Enter Your Last Name");
// var fullName = firstName + " " + lastName;

// document.write("Welcome to SMIT Sir " + fullName);

//                                                          Question No- 02

// var userInput = prompt("Please enter you favorite mobile name and model");

// document.write("My Favorite phone is " + userInput);
// document.write("<br/>Lenght of string " + userInput.length);

//                                                          Question No- 03

// var str = "Pakistani";
// document.write("String: " + str);
// document.write("<br/>Index of word 'N': " + str.indexOf("n"));

//                                                          Question No- 04

// var str = "Hello world";

// document.write("String: " + str);
// document.write("<br/>Last Index of word 'L': " + str.lastIndexOf("l"));

//                                                          Question No- 05

// var str = "Pakistani";
// document.write("String: " + str);
// document.write("<br/>Character at index 3: " + str.charAt(3));

//                                                          Question No- 06

// var firstName = prompt("Please Enter Your First Name");
// var lastName = prompt("Please Enter Your Last Name");

// document.write("Welcome to SMIT Sir " + firstName.concat(" " + lastName));

//                                                          Question No- 07

// var city="Hyderabad";

// document.write("City "+ city)
// document.write("<br/>After replacement: "+ city.replace("Hyder","Islam"))

//                                                          Question No- 08

// var message =
//   "Ali and Sami are best friends. They play cricket and football together.";

//   document.write(message.replaceAll("and","&"))

//                                                          Question No- 09

// var value = "472";

// document.write("Value: " + value);
// document.write("<br/>Type: " + typeof value);
// document.write("<br/>Value: " + value);
// document.write("<br/>Type: " + typeof parseInt(value));

//                                                          Question No- 10

// var userInput=prompt("Enter a word")

// document.write("User input: " + userInput)
// document.write("<br/>Upper case: " + userInput.toUpperCase())

//                                                          Question No- 11

// var userInput = prompt("Enter a word");

// document.write("User input: " + userInput);
// document.write("<br/>Title case: " + userInput.charAt(0).toUpperCase() + userInput.slice(1));

//                                                          Question No- 12

// var num = 35.36;

// document.write("Number: " + num);
// document.write("<br/>Result: " + num.toString().replace('.',''));

//                                                          Question No- 13

// var userName = prompt("Please enter your name");
// var specialCharacters = ["@", ",", ".", "!"];
// var flag = true;

// for (var i = 0; i < specialCharacters.length; i++) {
//   if (userName.includes(specialCharacters[i])) {
//     alert("Please enter a username without special characters.");
//     flag = false;
//     break;
//   }
// }

// if (flag) {
//   alert(userName + " Welcome Sir/Ma'am");
// }

//                                                          Question No- 14

// var userInput = prompt(
//   "Welcome to Che Bakery whats your order Ma'am | Sir"
// ).toLowerCase();
// var item = ["cake", "apple pie", "cookie", "chips", "patties"];

// var flag = true;

// for (var i = 0; i < item.length; i++) {
//   if (userInput == item[i]) {
//     document.write(
//       userInput + " is availabe at index " + [i] + " in our bakery"
//     );
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   document.write("We are sorry " + userInput + " is not availbe in our bakery");
// }

//                                                          Question No- 15 review this code

// var userInput = prompt("Enter a password");
// var flag = true;

// if (userInput.length < 6) {
//   alert("Password must be at least 6 characters long.");
//   flag = false;
// } else {
//   if (userInput.charAt(0) >= "0" && userInput.charAt(0) <= "9") {
//     alert("Password should not start with a number.");
//     flag = false;
//   }

//   var hasAlphabet = false;
//   var hasNumber = false;

//   for (var i = 0; i < userInput.length; i++) {
//     var charCode = userInput.charCodeAt(i);
//     if (
//       (charCode >= 65 && charCode <= 90) ||
//       (charCode >= 97 && charCode <= 122)
//     ) {
//       hasAlphabet = true;
//     } else if (charCode >= 48 && charCode <= 57) {
//       hasNumber = true;
//     }
//   }

//   if (!hasAlphabet || !hasNumber) {
//     alert("Password must contain both alphabets and numbers.");
//     flag = false;
//   }
// }

// if (flag) {
//   alert("Password matches criteria. 👍");
// }

//                                                          Question No- 16

// var university = "University of Karachi";

// for(var i=0; i<university.length; i++){
//     university.split()
//     console.log(university[i])
// }

//                                                          Question No- 17 incomplete

// var userInput = prompt("Enter a letter");

// document.write("User Input: " + userInput);  
// document.write("<br/>Last character of input:  " + userInput);


//                                                          Question No- 18
