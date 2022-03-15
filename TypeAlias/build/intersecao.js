"use strict";
// Com o type Alias também podemos usar a interseção de type alias que é semelhante ao extends em interface. Dessa forma ao inves de utilizarmos o extends as "nomeInterface", usamos o & para fazer essa união.
const registroTime = {
    id: "Urubu",
    nome: "Flamengo",
    estado: "Rio de Janeiro",
    campeonato: "Brasileirão",
    quantidade: 8
};
console.log(registroTime);
