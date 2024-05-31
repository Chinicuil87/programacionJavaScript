const respuesta = document.getElementById("resp");
const btnejecutar = document.getElementById("ejecuta");
const lista = document.getElementById("list");
let frutas = ["Manzana","Platano", "Pera"];

btnejecutar.addEventListener('click', iniciar);
function iniciar(){
    respuesta.innerText=frutas.length;
    frutas.forEach(function(item,index,array){
        lista.innerText = array;
    })
}
