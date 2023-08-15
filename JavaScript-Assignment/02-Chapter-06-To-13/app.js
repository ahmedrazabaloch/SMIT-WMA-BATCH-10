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

// var num = prompt("write a number", 5);
// for (var i = 1; i <= 10; i++) {
//   var result = num * i;
//   document.write(num + " x " + i + " = " + result + "<br>");
// }

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
