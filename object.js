let cars = [
  { color: "purple", type: "minivan", price: 120000, capacity: 7 },
  { color: "red", type: "station wagon", price: 20000, capacity: 5 },
  { color: "green", type: "toyota", price: 1000000, capacity: 5 },
  { color: "green", type: "toyota", price: 110, capacity: 5 },
  { color: "green", type: "toyota", price: 233, capacity: 5 },
];
// let total = 0;
// for (i = 0; i < cars.length; i++) {
//   if (cars[i].price < 1000) {
//     console.log(cars[i]);
//   }
// }

let x = cars.filter(Expensive);
function Expensive(value) {
  return value.price > 10000;
}
console.log(x);
