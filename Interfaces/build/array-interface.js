"use strict";
//Array nas interfaces, aprenderei como aproveitar uma array de uma interface em outra.
const jogosFavoritos = {
    jogos: [
        { nome: "God Of War", ano: 2003, descricao: "Melhor jogo que existe" },
        { nome: "Super Mario", ano: 1990 } // Não foi passado nada na propriedade descricao por ser facultativo a atribuicao de valor.
    ]
};
console.log(jogosFavoritos.jogos[1]);
const propriedadeArray = {
    props: ["map", "reduce", "ForEach"]
};
console.log(propriedadeArray);
