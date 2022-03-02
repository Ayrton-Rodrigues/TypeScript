// boolean é true or false, tudo que seja diferente de 0, string vazia e undefined é verdadeiro.

let validacao: boolean = true;
console.log(validacao.constructor)

let statusProduto: number = 1;
statusProduto = 0

validacao = Boolean(statusProduto)
console.log(validacao)



