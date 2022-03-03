"use strict";
//utilizaremos 2 formas para passar uma funcao na interface, com funcao externa e interna diretamente na interface.
//No primeiro caso foi usado uma funcao externa para ser atribuida a propriedade da interface
function mostraPreco(preco) {
    console.log("O preço é: " + preco);
}
function mostraNome(nome) {
    return `Seu nome é: ${nome}`;
}
const novoProduto = {
    id: 1,
    nome: "TypeStore",
    status: true,
    promocao: mostraPreco,
    prompt: mostraNome,
};
console.log(novoProduto);
//Nesse caso passaremos a funcao diretamente no objeto tipado da interface.
const produtoNovo = {
    id: 2,
    nome: "JavaStore",
    status: true,
    promocao: (preco) => {
        console.log("O preço é: " + preco);
    },
    prompt: (nome) => {
        return `Seu nome é: ${nome}`;
    },
};
const somaNum = (valor1, valor2) => {
    return valor1 + valor2;
};
const total = somaNum(30, 20);
console.log("O total é: " + total);
