// Com o readonly nós podemos informar que certa propriedade da interface é apenas leitura, impedindo de ser alterada.

interface produtoProps{
  readonly id: string;
  nome: string;
  estoque: number;
}

let produto: produtoProps = {
  id: "25",
  nome: "Carrinho",
  estoque: 25,
}
//produto.id = "23" quando atribuímos um novo valor para a propriedade ela altera. Ao ter uma propriedade que não podemos mudar, usamos o readonly na frente dela. 

console.log(produto.id)