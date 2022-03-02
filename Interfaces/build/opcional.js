"use strict";
//A interface também aceita que sejam passadas propriedades opcionais, como veremos a seguir.
//Ao criar o "newUser" não temos obrigação de passar a propriedade idade, pois informamos na estrutura padrão da interface que ela era opcional.
const newUser = {
    nome: "Ayrton Rodrigues",
    status: true,
};
// console.log(newUser)
function cadastroUsuario(propriedade) {
    console.log(propriedade.status);
    console.log(propriedade.nome);
    console.log(propriedade.idade);
}
cadastroUsuario({ nome: "Ayrton", idade: 26, status: true });
