// >>>>>>>>>>>>>>>>>>>> Chapter No 31 to 34 <<<<<<<<<<<<<<<<<<<<<

// Question No=01

// var date = new Date();

// document.write(date);

// Question No=02

// monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var date = new Date();

// var month = monthNames[date.getMonth()];

// document.write("Current month: "+month);

// Question No=03

// var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var date = new Date();

// var day = daysName[date.getDay()];

// document.write("Today is: " + day);

// Question No=04

// var daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var date = new Date();

// var day = daysName[date.getDay()];

// if (day == "Sun" || day == "Sat") {
//   document.write("It's Fun day");
// } else {
//   document.write("Today is: " + day);
// }

// Question No=05

// var date = new Date();

// var fifteen = date.getDay();

// if (fifteen <= 15) {
//   document.write("First fifteen day of the month");
// } else {
//   document.write("Last days of the month");
// }

// Question No=06

// var date = new Date();

// var oldDate = new Date("January 1, 1970");

// var defMilSec = date - oldDate;
// var defSec = defMilSec / 60000;

// document.write("Current Date: " + date);
// document.write(
//   "<br/> Elapsed milliseconds since January 1, 1970: " + defMilSec
// );
// document.write("<br/>Elapsed minutes since January 1, 1970: " + defSec);

// Question No=07

// var date = new Date();

// var getTime = new Date().getHours();

// if(getTime > 12 ){
// document.write("Its PM")
// }else(
//     document.write("Its AM")

// )

// Question No=08

// var laterDate = new Date("31 dec 2022");

// document.write("Later date: " + laterDate);

// Question No=09

// var ramadan = new Date("March 23 2023");

// var currentDate = new Date();

// var minusDays = currentDate - ramadan;

// var defDays = minusDays / 86400000;

// document.write(
//   Math.round(defDays) + " days have been passed since 1st Ramadan, 2023"
// );

// Question No=10

// var date = new Date("jan 01 2023");

// var currentDate = new Date();

// var minus = currentDate - date;

// var seconds = minus / 60;

// document.write("On reference date " + date);
// document.write(
//   "<br/>" + Math.round(seconds) + " seconds had passed since beginning of 2023"
// );

// Question No=11

// var currentDate = new Date();

// var afterhours = currentDate.getHours();

// currentDate.setHours(afterhours - 1);

// document.write("Current Date: " + new Date());
// document.write("<br/>1 hour ago, it was " + currentDate);

// Question No=12

// var currentDate = new Date();

// var bc = currentDate.getFullYear()
// currentDate.setFullYear(bc - 100)

// document.write("Current Date: " + new Date());
// document.write("<br/>100 years back, it was " + currentDate);

// Question No=13

// var dob = new Date(prompt("Enter your birth year","1995")).getFullYear();

// var currentDate = new Date().getFullYear();

// var minus = currentDate - dob;

// document.write("Your age is " + minus);
// document.write("<br/>Your birth year is " + dob);

// Question No=14

// var monthName = [
//   "January ",
//   "February ",
//   "March ",
//   "April ",
//   "May ",
//   "June ",
//   "July ",
//   "August ",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var customerName = "Ahmedraza";
// var month = monthName[new Date().getMonth()];
// var noOfUnit = 410;
// var chargPerUnit = 16;

// var netAmount = noOfUnit * chargPerUnit;
// var latePay = 350;
// var grossAmount = netAmount + latePay;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br/> Customer Name: " + customerName);
// document.write("<br/> Month: " + month);
// document.write("<br/> Number of units: " + noOfUnit);
// document.write("<br/> Charges per unit: " + chargPerUnit);
// document.write("<br/> ");
// document.write("<br/> Net Amount Payable (within Due Date): " + netAmount);
// document.write("<br/> Late payment surcharges: " + latePay);
// document.write("<br/> Gross Amount Payable (after Due Date: " + grossAmount);
