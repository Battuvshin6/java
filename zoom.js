function calc() {
  let num1 = document.getElementById("text").value;
  let num2 = document.getElementById("text-2").value;
  document.getElementById("submit").innerText = parseInt(num1) + parseInt(num2);
}

let addButton = document
  .getElementById("answer")
  .addEventListener("click", calc);
