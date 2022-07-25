//Variáveis que guardam referências a tela de resultados e aos botões, e as que vão armazenar os valores e calcular o resultado
let p = document.querySelector("p");
let exp;
let cal;
let operadores = document.querySelectorAll(".operador");
let btns = document.querySelectorAll(".inserir");

//Adciona um manipulador de eventos em todos os elementos que devem ser inseridos na tela
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => inserirNum(e.target.value));
}

function inserirNum(n) {
  //Habilita os botões de operação e registra um manipulador de eventos para eles serem inseridos na tela
  for (let j = 0; j < operadores.length; j++) {
    operadores[j].disabled = false;
    operadores[j].addEventListener("click", (e) => inserirNum(e.target.value));
  }
  //Verifica se o valor de n é correspondente a um operador. Se verdadeiro, irá mostrar o resultado da expressão mostrada na tela junto com o operador, caso não, irá apenas inserir o valor digitado.
  if (n === "+" || n === "-" || n === "*" || n === "/") {
    cal = eval(p.textContent);
    p.textContent = cal + n;
  } else {
    p.textContent += n;
  }
}

//Função que vai fazer os cálculos
function calcular() {
  exp = p.textContent;
  cal = eval(exp);

  p.textContent = cal;
}

let varCalcula = document.getElementById("calcular");

varCalcula.addEventListener("click", calcular);

//Função que vai deletar um caractere por vez
function deleteOne() {
  p.textContent = p.textContent.slice(0, p.textContent.length - 1) + "";
}

let backSpace = document.getElementById("deleteone");

backSpace.addEventListener("click", deleteOne);

//Função que vai limpar a tela
function deleteAll() {
  p.textContent = "";
}

let clear = document.getElementById("deleteall");

clear.addEventListener("click", deleteAll);
