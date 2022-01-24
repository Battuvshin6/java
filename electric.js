let energy = parseInt(prompt("enter energy amount: "));
let total = 0;
if (energy > 50) {
  energy = energy - 50;
  total = total + 50 * 50;
}
if (energy > 100) {
  energy = energy - 100;
  total = total + 100 * 75;
}
if (energy > 100) {
  energy = energy - 50;
  total = total + 100 * 120;
}
