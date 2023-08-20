// <<<<<<<<<<<< Chapter 13 to 15 >>>>>>>>>>>>

//Questin No-01

// var students;

//Questin No-02

// students = [];

//Questin No-03

// var str = ["Ahmed", "Raza", "Salman", "Ali"];

//Questin No-04

// var num = [126864, 126863, 126862, 126861];

//Questin No-05

// var boole = [true, false];

//Questin No-06

// var mixed = ["Ahmed", 126864, true, "Salman", 126863, false];

//Questin No-07

// var qualifictions = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M. Phil.",
//   "PhD",
// ];

// document.write("<h2>Qualifications:</h2>");
// document.write(qualifictions);

//Questin No-08

// var students = ["Ahmed", "Raza", "Salman"];
// var score = [320, 230, 480];
// var totalMarks = 500;

// document.write(
//   "Score of " +
//     students[0] +
//     " is " +
//     score[0] +
//     ". Percentage: " +
//     (score[0] / 500) * 100 +
//     "%"
// );
// document.write(
//   "<br/> Score of " +
//     students[1] +
//     " is " +
//     score[1] +
//     ". Percentage: " +
//     (score[1] / 500) * 100 +
//     "%"
// );
// document.write(
//   "<br/>Score of " +
//     students[2] +
//     " is " +
//     score[2] +
//     ". Percentage: " +
//     (score[2] / 500) * 100 +
//     "%"
// );

//Questin No-09

// var colorName = ["Green"];
// alert(colorName);

// colorName.unshift(
//   prompt("Enter a color name you want to add a beginning", "Red")
// );
// alert(colorName);

// colorName.push(prompt("Enter a colorn name you want to add in end", "Orange"));
// alert(colorName);

// colorName.unshift(
//   prompt("Add two more color name you want to add in in beginning", "Black")
// );
// colorName.unshift(
//   prompt("Add two more color name you want to add in in beginning", "White")
// );
// alert(colorName);

// colorName.shift();
// alert(colorName);

// colorName.pop();
// alert(colorName);

// colorName.push(prompt("which index you want to add a color name.", "2"));
// alert(colorName);

// colorName.splice(
//   prompt(
//     "Which index you want to delete color(name) & how many colors want to delete",
//     "2,2"
//   )
// );
// alert(colorName);

// document.write(colorName);

//Questin No-10

// var studentScore = [320, 230, 480, 120];
// document.write("Scores of Students : " + studentScore);
// document.write("<br/>Ordered Scores of Students : " + studentScore.sort());

//Questin No-11

// document.write("Cities list:");

// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<br/>" + city);
// document.write("<br/>");
// document.write("<br/> Selected cities list:");

// var selectedCity = city.slice(2, 4);
// document.write("<br/>" + selectedCity);

//Questin No-12

// var arr = ["This ", " is ", " my ", " cat"];

// document.write("Array" + "<br/>" + arr);

// document.write("<br/>");

// document.write("<br/> String:" + "<br/>" + arr.join(""));

// //Questin No-13

// var device = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Devices:" + "<br/>" + device);
// document.write("<br/>");

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.shift();
// document.write("<br/> Out:" + "<br/>" + returnValue);

//Questin No-14

// var device = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Devices:" + "<br/>" + device);
// document.write("<br/>");

// var returnValue = device.pop();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.pop();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.pop();
// document.write("<br/> Out:" + "<br/>" + returnValue);

// var returnValue = device.pop();
// document.write("<br/> Out:" + "<br/>" + returnValue);

//Questin No-15

// var phoneManufacturers = [
//   "Apple",
//   "Samsung",
//   "Motorola",
//   "Nokia",
//   "Sony",
//   "Haier",
// ];

// document.write("Select a Phone Manufacturer:");
// document.write(
//   "<select>" + "<option>" + phoneManufacturers[0] + "</option>" + "</select>"
// );
