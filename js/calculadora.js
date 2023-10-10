'use strict'

const input = document.getElementById('input')
const inputResultado = document.getElementById('labelhistorico')
let numero = 0, soma = 0, numeros = 0
let operadores = []

function AddNumero(nmr){
    input.value += nmr
}
function Virgula(valor){
    valor = input.value
    if(valor.length == 0){
        AddNumero('0,')
    }else if(valor.length > 0 && valor.includes(',')){
        alert('ja tem virgula')
    }else if(valor.length > 0){
        AddNumero(',')
    }

}
function ValidaInputVazio(valor){
    if(input.value == ''){
        numeros = valor
        operadores.pop()
    }else{
        numeros = parseInt(input.value)
    }
}
function Operacoes(operador,soma){
        console.log(soma)
        input.value = ''
        operadores.pop()
        operadores.push(operador)
        inputResultado.innerText = soma
}
function Calcular(operador){
    if(numero == 0){
        numero = parseInt(input.value)
         input.value = ''
         console.log(numero)
         console.log(operador)
         operadores.push(operador)
         inputResultado.innerText = numero
    }else if(operadores[0] == '+'){
        ValidaInputVazio(0)
        soma = numero += numeros
        Operacoes(operador,soma)
    }else if(operadores[0] == '-'){
        ValidaInputVazio(0)
        soma = numero -= numeros
        Operacoes(operador,soma)
    }else if(operadores[0] == '/'){
        ValidaInputVazio(1)
        soma = numero /= numeros
        Operacoes(operador,soma)
    }else if(operadores[0] == 'x'){
        ValidaInputVazio(1)
        soma = numero *= numeros
        Operacoes(operador,soma)
    }else if(operadores[0] == '%'){
        ValidaInputVazio(0)
        soma = (numeros/100)* numero
        Operacoes(operador,soma)
    }else if(operadores[0] == '='){
        ValidaInputVazio(0)
        soma = numeros
        Operacoes(operador,soma)
    }
}
function AC(){
    input.value = ''
    inputResultado.innerText = '0'
    operadores = []
    numero = 0, soma = 0, numeros = 0
}
function Apagar(){
    let str = input.value
    str = str.slice(0,-1)
    input.value = str
}
