"use strict";
//Type alias é uma espécie de interface mas como se fosse uma variável que podemos reutilizar de diversas formas respeitando o que foi atribuido na declaração. ex:
function entrar(id, nome) {
    console.log(`Id: ${id}: ${nome}, acaba de logar!`);
}
entrar(24, "Ayrton");
function qualCelular(celular) {
    console.log(`Foi informado ${celular} para formatação`);
}
qualCelular("MOTO-G1");
