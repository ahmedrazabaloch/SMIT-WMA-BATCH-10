// <<<<<<<<<<<<<<<< Capter 6-9 >>>>>>>>>>>>>>>>

// Question-1

// var a = 10;

// document.write("Result:");
// document.write("<br/> The Value of a is: " + a);
// document.write("<br/>.........................");
// document.write("<br/>");
// document.write("<br/> The Value of ++a is: " + ++a);
// document.write("<br/> Now the Value of a is: " + a);
// document.write("<br/>");
// document.write("<br/> The Value of a++ is: " + a++);
// document.write("<br/> Now the Value of a is: " + a);
// document.write("<br/>");
// document.write("<br/> The Value of --a is: " + --a);
// document.write("<br/> Now the Value of a is: " + a);
// document.write("<br/>");
// document.write("<br/> The Value of a-- is: " + a--);
// document.write("<br/> Now the Value of a is: " + a);
// document.write("<br/>");

// Question-2

// var a = 2,
//   b = 1;

// var result = --a - --b + ++b + b--;
// document.write("--a pre decrement");
// document.write("<br/> --a - --b; pre decrement");
// document.write(
//   "<br/> --a - --b + ++b; pre decrement concatenate with pre increment"
// );
// document.write(
//   "<br/> --a - --b + ++b + b--; pre decrement concatenate with pre increment"
// );
// document.write("<br/> a is " + a);
// document.write("<br/>b is " + b);
// document.write("<br/>result is " + result);

// Question-3
// var username = prompt("Please enter your name");
// alert("Welcome " + username);

// Question-4,5

// var table = prompt("write a number", 5);

// document.write(" </br>" + table + " x 1 = " + table * 1);
// document.write(" </br>" + table + " x 2 = " + table * 2);
// document.write(" </br>" + table + " x 3 = " + table * 3);
// document.write(" </br>" + table + " x 4 = " + table * 4);
// document.write(" </br>" + table + " x 5 = " + table * 5);
// document.write(" </br>" + table + " x 6 = " + table * 6);
// document.write(" </br>" + table + " x 7 = " + table * 7);
// document.write(" </br>" + table + " x 8 = " + table * 8);
// document.write(" </br>" + table + " x 9 = " + table * 9);
// document.write(" </br>" + table + " x 10 = " + table * 10);

// Question-6

// var sub1 = prompt("Please Enter Your First Subject Name", "English");
// var sub2 = prompt("Please Enter Your Second Subject Name", "Physics");
// var sub3 = prompt("Please Enter Your Third Subject Name", "Chemistry");
// var obtainMarks1 = +prompt("Please Enter First Subject obtained Marks", "54");
// var obtainMarks2 = +prompt("Please Enter Second Subject obtained Marks", "54");
// var obtainMarks3 = +prompt("Please Enter Third Subject obtained Marks", "48");
// var totalMarks = 100;

// document.write("<h4>Subject Total Marks Obtained Marks Percentage</h4>");
// document.write(
//   "<br/>" +
//     sub1 +
//     "    " +
//     totalMarks +
//     "    " +
//     obtainMarks1 +
//     "    " +
//     (obtainMarks1 / totalMarks) * 100 +
//     "%"
// );
// document.write(
//   "<br/>" +
//     sub2 +
//     "    " +
//     totalMarks +
//     "    " +
//     obtainMarks2 +
//     "    " +
//     (obtainMarks2 / totalMarks) * 100 +
//     "%"
// );
// document.write(
//   "<br/>" +
//     sub3 +
//     "    " +
//     totalMarks +
//     "    " +
//     obtainMarks3 +
//     "    " +
//     (obtainMarks3 / totalMarks) * 100 +
//     "%"
// );
// var totalObtainMarks = obtainMarks1 + obtainMarks2 + obtainMarks3;

// document.write(
//   "<br/>" +
//     totalMarks +
//     "       " +
//     totalObtainMarks +
//     "       " +
//     "     " +
//     ((totalObtainMarks / (totalMarks * 3)) * 100 + "%")
// );

// <<<<<<<<<<<<<<<< Capter 9-11 >>>>>>>>>>>>>>>>

// Question No-1

// var city = "karachi";
// var user = prompt("Enter your city name", "Karachi");

// if ((city = user)) {
//   alert("Welcome To City of Lights");
// }

// Question No-2

// var gender = prompt("Please Enter Your Gender");

// if (gender == "male") {
//   alert("Good Morning Sir");
// } else if (gender == "female") {
//   alert("Good Morning Ma'am");
// }

// Question No-3

// var trafficSignal = prompt("Please write the color of Traffic Signal");

// if (trafficSignal == "red") {
//   alert("Must Stop");
// } else if (trafficSignal == "yellow") {
//   alert("Ready to move");
// } else if (trafficSignal == "green") {
//   alert("Move Now");
// }

// Question No-4

// var fuel=prompt("How many fuel litres left in Vehicle ","litres")

// if(fuel <= "0.25litres"){
//     alert("Please refill the fuel in your car")
// }

// Question No-5

// var a = 4
// if (++a===5){
//     alert("Given condition for variable is ture")
// }

// var b = 82;
// if (b++ === 83) {
//   alert("Given condition for variable is False");
// }

// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is ture");
// }
// if (++c < 14) {
//   alert("condition 3 is false");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// if (true) {
//   alert("True");
// }

// if (false) {
//   alert("False");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// Quesiton NO-6

// var eng = +prompt("Please Enter Your English Subject Obtained Marks");
// var mat = +prompt("Please Enter Your Math Subject Obtained Marks");
// var urdu = +prompt("Please Enter Your Urdu Subject Obtained Marks");
// var totalMarks = 300;
// var totalObtainedMarks = eng + mat + urdu;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("<br/> Total Marks : " + totalMarks);
// document.write("<br/> Marks Obtained : " + totalObtainedMarks);
// document.write("<br/> Percentage : " + percentage + "%");
// if (percentage >= 80) {
//   document.write(" <br/> Grade : A-One");
//   document.write(" <br/> Remarks : Excellent");
// } else if (percentage >= 70) {
//   document.write(" <br/> Grade : A");
//   document.write(" <br/> Remarks : Good");
// } else if (percentage >= 60) {
//   document.write(" <br/> Grade : B");
//   document.write(" <br/> Remarks : You need to imporve");
// } else if (percentage < 60) {
//   document.write(" <br/> Grade : Fail");
//   document.write(" <br/> Remarks : Sorry");
// }

// Quesiton NO-7

// var secrectNo = 7;

// var guessNo = +prompt("Guess a number");

// if (guessNo === secrectNo) {
//   alert("Bingo! Correct Answer.");
// } else if (guessNo === ++secrectNo) {
//   alert("Close enough to the correct answer");
// } else if (guessNo !== secrectNo) {
//   alert("Try Again");
// }

// Quesiton NO-8

// var divisible = +prompt("Enter a number:");

// if (divisible % 3 === 0) {
//   alert(divisible + " is divisible by 3");
// } else {
//   alert(divisible + " is not divisible by 3");
// }

// Quesiton NO-9

// var num = prompt("Enter a number");

// if (num % 2 === 0) {
//   alert(num + " is Even Number");
// } else if (num % 1 === 0) {
//   alert(num + " is Odd Number");
// }

// Quesiton NO-10

// var temp = prompt("Weather temperature is ?");

// if (temp >= 40) {
//   alert("It is too hot outside.");
// } else if (temp >= 30) {
//   alert("The Weather today is Normal.");
// } else if (temp >= 20) {
//   alert("Today’s Weather is cool.");
// } else if (temp >= 10) {
//   alert("OMG! Today’s weather is so Cool.");
// }

// Quesiton NO-11

// var firstNum = +prompt("Enter First value");
// var secondNum = +prompt("Enter Second value");
// var oprationSign = prompt("Enter a Operation Sign For Calculation (+, -, *, /, %)");

// var result;

// if (oprationSign === "+") {
//   result = firstNum + secondNum;
//   alert("Calculated value is " + result);
// } else if (oprationSign === "-") {
//   result = firstNum - secondNum;
//   alert("Calculated value is " + result);
// } else if (oprationSign === "*") {
//   result = firstNum * secondNum;
//   alert("Calculated value is " + result);
// } else if (oprationSign === "/") {
//   result = firstNum / secondNum;
//   alert("Calculated value is " + result);
// } else if (oprationSign === "%") {
//   result = firstNum % secondNum;
//   alert("Calculated value is " + result);
// }

// <<<<<<<<<<<<<<<< Capter 12-13 >>>>>>>>>>>>>>>>

// Question No-1

// var userInput = prompt("Please enter a value");
// var charCode = userInput.charCodeAt();

// if (charCode >= 48 && charCode <= 57) {
//   alert("It's a Number");
// } else if (charCode >= 65 && charCode <= 90) {
//   alert("It's an Uppercase Letter");
// } else if (charCode >= 97 && charCode <= 122) {
//   alert("It's a Lowercase Letter");
// } else {
//   alert("Invalid Input");
// }

// Question No-2

// var userInput1 = prompt("Enter a first integers");
// var userInput2 = prompt("Enter a sencond integers");

// if (userInput1 > userInput2) {
//   alert(userInput1 + " Larger-then " + userInput2);
// } else if (userInput1 === userInput2) {
//   alert(userInput1 + " Equal to " + userInput2);
// } else {
//   alert(userInput2 + " Larger-than " + userInput1);
// }

// Question No-3

// var num = +prompt("Enter a number");

// if (num > 0) {
//   alert("The number is positive");
// } else if (num === 0) {
//   alert("The numer is zero");
// } else {
//   alert("The number is negative");
// }

// Question No-4

// var user = prompt("Give a value");

// if (user.length === 1) {
//   if (
//     user === "a" ||
//     user === "e" ||
//     user === "i" ||
//     user === "o" ||
//     user === "u"
//   ) {
//     alert(user + " The character is a vowels");
//   } else {
//     alert("This character not a vowels.");
//   }
// } else {
//   alert("Negative please enter a single alphabetic character.");
// }

// Question No-5

// var userPass = prompt("Create a password");
// var validPass = prompt("Please enter your passowrd");

// if (userPass === "" || validPass === "") {
//   alert("Please enter your password");
// } else if (userPass === validPass) {
//   alert("Correct! The password you entered matches the original password");
// } else if (userPass !== validPass) {
//   alert("Incorrect password");
// }

// Question No-6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   alert(greeting);
// } else {
//   greeting = "Good evening";
//   alert(greeting);
// }

// Question No-7

// var time = +prompt("What time is it?");

// if (time >= "0000" && time < 1200) {
//   alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//   alert("Good Night!");
// } else {
//   alert("please input value in business hours like (1300=01:00pm)");
// }
