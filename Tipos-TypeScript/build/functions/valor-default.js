"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    const data = { email, senha, nome, idade };
    return data;
}
function statusLoja(nome, email, status = false) {
    if (status === true) {
        return "Loja aberta";
    }
    else {
        return "loja fechada";
    }
}
console.log(statusLoja("Donalds", "donalds@test.com", true));
