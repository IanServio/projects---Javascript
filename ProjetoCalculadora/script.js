'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;


const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.innerText = texto;
        novoNumero = false;
    }else{
        display.innerText += texto;
    }

}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) =>{
    if(!novoNumero){
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = display.textContent;
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));



