//                                               <<<<<<<<<<<<<<<<<<<<< Chapter 17 to 20 >>>>>>>>>>>>>>>>>

//                                                                      Question No 01

// var arr=[[],[],[]]

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

// var table = +prompt("Enter a number to show its multiplication table");
// var tableLenght = +prompt("Enter a length multiplication table");

// document.write(
//   "Multipalication table of " + table + " lenght " + tableLenght + "<br/>"
// );

// for (var i = 1; i <= tableLenght; i++) {
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

// var user = prompt("Welcome To Chaman Bakery! What do you want to order");
// var item = ["cake", "apple pie", "coockie", "chips", "patties"];
// var flag = true;

// for (var i = 0; i < item.length; i++) {
//   if (user == item[i]) {
//     console.log(user + " is availabe at index " + [i] + " in our bakery");
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("We are sorry " + user + " is not availbe in our bakery");
// }

//                                                                      Question No 08

// var num = [24, 53, 78, 91, 12];
// var large = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] > large) {
//     large = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The largest num is " + large);

//                                                                      Question No 09

// var num = [24, 53, 78, 91, 12];
// var small = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] < small) {
//     small = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The smallest num is " + small);

//                                                                      Question No 10

// var num = 5;

// for (var i = 1; i <20; i++) {
//   var multi = i * num;
//   console.log(multi);
// }
