let p = document.querySelector("p");
let exp;
let cal;
let operadores = document.getElementsByClassName("operador");

function inserirNum(element) {
  operadores[0].disabled = false;
  operadores[1].disabled = false;
  operadores[2].disabled = false;
  operadores[3].disabled = false;
  if (
    element.value === "+" ||
    element.value === "-" ||
    element.value === "*" ||
    element.value === "/"
  ) {
    cal = eval(p.textContent);
    p.textContent = cal + element.value;
  } else {
    p.textContent += element.value;
  }
}
function calcular() {
  exp = p.textContent;
  cal = eval(exp);

  p.textContent = cal;
}

function deleteOne() {
  p.textContent = p.textContent.slice(0, p.textContent.length - 1) + "";
}

function deleteAll() {
  p.textContent = "";
}
