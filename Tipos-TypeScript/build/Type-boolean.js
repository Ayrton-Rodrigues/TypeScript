"use strict";
let validacao = true;
console.log(validacao.constructor);
let statusProduto = 1;
statusProduto = 0;
validacao = Boolean(statusProduto);
console.log(validacao);
