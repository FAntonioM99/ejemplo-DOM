



const valor1 = document.querySelector(".valor1");
const valor2 = document.querySelector(".valor2");
const mostrar = document.querySelector(".mostrar");

function btnSumar(){
   const resultado = parseInt(valor1.value) + parseInt(valor2.value);
   mostrar.innerText = "El resultado es: " + resultado;
}

function btnRestar(){
    const resultado = parseInt(valor1.value) - parseInt(valor2.value);
   mostrar.innerText = "El resultado es: " + resultado;
}
function btnMultiplicar(){
    const resultado = parseInt(valor1.value) * parseInt(valor2.value);
   mostrar.innerText = "El resultado es: " + resultado;
}
function btnDividir(){
    const resultado = parseInt(valor1.value) / parseInt(valor2.value);
   mostrar.innerText = "El resultado es: " + resultado;
}