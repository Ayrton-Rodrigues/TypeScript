"use strict";
let n1 = 10;
let n2 = 5;
function soma(valor1, valor2) {
    let adicao = valor1 + valor2;
    return adicao;
}
console.log(soma(n1, n2));
function somaSecond(valor1, valor2) {
    let adicao = valor1 + valor2;
    if (adicao > 20) {
        return "Maior que 20";
    }
    else {
        return "Menor que 20";
    }
}
console.log(somaSecond(n1, n2));
function user(username) {
    let message = "Bem vindo";
    return `${message} ${username}`;
}
console.log(user("Ayrton"));
