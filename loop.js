// for (let i=0; i<100; i++){
//     console.log(i);
// 70-100 hoorondoh 80s ih buh toonii niilberiig olii
// let total = 1;
// for (let i = 1; i <= 10; i++) {
//   total = total * i;
// }
// console.log(total);
// function restaurantMenu() {
//   document.getElementById("text").innerText =
//     "Zaidas 6500 \n Undugte huurag 6400";
// console.log("Tsuivan 5900₮");
// console.log("Budaatai Huurga 5900₮");
// console.log("Banshtai Tsai 6500₮");
// console.log("Piroshki 1500₮");
// }
// restaurantMenu();
// function tomAndToms(coffee) {
//   return "your " + coffee + " is ready";
// }
// let myCoffee = tomAndToms("Latte");
// console.log(myCoffee);

// 1
// let num = parseInt(prompt("insert your number: "));
// function cube(x) {
//   console.log(x * x * x);
// }
// cube(num);

// 2
// let x = 5;
// function talbai(x) {
//   console.log(5 * 2);
//   console.log(3.14 * (5 * 2));
//   console.log(2 * 3.14 * 5);
// }
// talbai(5);

// x = 10;
// y = 8;
// function smallest(x, y) {}
// smallest(10, 8);

// 2022.01.26
// let num = parseInt(prompt("insert your number:"));
// function findSumOfEven(x) {
//   let total = 0;
//   for (i = 1; i <= x; i++) {
//     if (i % 2 == 0) {
//       total = total + i;
//     }
//   }
//   document.getElementById("text").innerHTML = "your answer: " + total;
// }
// console.log(findSumOfEven(num));

// let x = parseInt(prompt("insert your number:"));
// let y = parseInt(prompt("insert your number:"));
// function findPower() {
//   //toog n toogoor urjine
//   multiply = x ** y;
//   {
//     document.getElementById("text").innerHTML = "your answer: " + multiply;
//   }
// }
// findPower();

// let x = parseInt(prompt("insert your number:"));
// let y = parseInt(prompt("insert your number:"));
// function divisibilty() {
//   if (x % y === 0) {
//     document.getElementById("text").innerHTML = "it is dividable";
//   } else {
//     document.getElementById("text").innerHTML = "it is not dividable";
//   }
// }
// divisibilty();

// let x = parseInt(prompt("insert your number:"));
// function numberIntoString() {
//   parseInt(x) + "";
//   {
//     document.getElementById("text").innerHTML = x;
//   }
// }
// numberIntoString();
// function mathOp() {
//     function nemeh(x, y) {
//       let niilber = x + y;
//       return niilber;
//     }
//     function hasah() {
//       let a = parseInt(prompt("Enter first number: "));
//       let b = parseInt(prompt("Enter second number: "));
//       let yalgavar = a - b;
//       return yalgavar;
//     }
//     let choice = prompt(
//       //choice = '+'
//       "Enter + to plus operation \nEnter - to subtract\nEnter your choice: "
//     );
//     if (choice === "+") {
//       let a = parseInt(prompt("Enter first number: "));
//       let b = parseInt(prompt("Enter second number: "));
//       let sum = nemeh(a, b);
//       document.getElementById("answer").innerText = sum;
//     } else if (choice === "-") {
//       let sub = hasah();
//       document.getElementById("answer").innerText = sub;
//     } else {
//       console.log("wrong choice");
//     }
//     //   switch (choice) {
//     //     case "+":
//     //       console.log("nemeh uildel hiine");
//     //       break;
//     //     case "-":
//     //       console.log("hasah uildel hiine");
//     //       break;
//     //     default:
//     //       console.log("Wrong choice");
//     //       break;
//     //   }
//   }
//  mathOp();

// let x = "";
// for (let row = 0; row < 5; row++) {
//   for (let col = 5; col > row; col--) {
//     x += "*";
//   }
//   x += "\n";
// }

// console.log(x);

const a = [
  ["x", "y", "z"],
  ["a", "b", "c"],
  ["q", "w", "e"],
];
a.reverse();
for (let row = 0; row < 3; row++) {
  //row=0
  for (let col = 0; col < 3; col++) {
    //col=1
    console.log(a[row][col]); //
  }
}
