const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const suma = document.getElementById("sum");
const resta = document.getElementById("res");
const multiplicacion = document.getElementById("mul");
const division = document.getElementById("div");
const btncalcular = document.getElementById("calcular");

btncalcular.addEventListener('click',calcular)
function calcular(){
    const p1 = parseFloat(n1.value);
    const p2 = parseFloat(n2.value);
    let sum = p1+p2;
    let res = p1+p2;
    let mul = p1*p2;
    let div = p1/p2;
    suma.innerText = sum;
    resta.innerText = res;
    multiplicacion.innerText = mul;
    division.innerText = div;
}