//                                               <<<<<<<<<<<<<<<<<<<<< Chapter 17 to 20 >>>>>>>>>>>>>>>>>

//                                                                      Question No 01

// var arr=[,[],]

// console.log(arr)

//                                                                      Question No 02

// var arr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1],
// ];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//                                                                      Question No 03

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//                                                                      Question No 04

// var table = [+prompt("Enter a number to show its multiplication table")];
// var tableLenght = [+prompt("Enter a length multiplication table")];

// tableLenght = 10;

// document.write(
//   "Multipalication table of " + table + " lenght " + tableLenght + "<br/>"
// );

// for (var i = 1; i <= 10; i++) {
//   var multi = i * table;

//   console.log(table + " x " + i + " = " + multi);
//   document.write(table + " x " + i + " = " + multi + "<br/>");
// }

//                                                                      Question No 05

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// var count = [0];
// for (var i = 0; i < fruits.length; i++) {
//   console.log("Element at index " + count++ + " is " + fruits[i]);
// }

//                                                                      Question No 06

// A==> Counting

// for (var i = 1; i <=15; i++) {
//   console.log(i);
// }

// B==> Reverse Counting

// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// C==> Even Number

// for (var i = 1; i <=20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// C==> Odd Number

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// C==> Series

// for (var i = 1; i <= 20; i++) {
//   i++;
//   console.log(i + "k");
// }

//                                                                      Question No 07

var user = prompt("Welcome To Chaman Bakery! What do you want to order");
var item = ["cake", "apple pie", "coockie", "chips", "patties"];
var check = "";
var count = [0];

for (var i = 0; i < item.length; i++) {
  count;
  if (user == item[i]) {
    console.log(user + " is availabe at index " + count++ + " in our bakery");
  }
  
}
console.log("check")

// if (check === item[i]) {
//   console.log(check + " is availabe at index " + "in our bakery");
// } else {
//   console.log(check + " is not available in our bakery");
// }

// console.log(item);

//                                                                      Question No 08
