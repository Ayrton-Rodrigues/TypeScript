//Passaremos funcoes em uma interface
interface CadastroProduto {
  nome: string;
  id: number;
  status: boolean;
  promocao: (preco: number) => void;
  prompt: (nome: string) => string;
}
//utilizaremos 2 formas para passar uma funcao na interface, com funcao externa e interna diretamente na interface.


//No primeiro caso foi usado uma funcao externa para ser atribuida a propriedade da interface
function mostraPreco(preco: number): void {
  console.log("O preço é: " + preco);
}
function mostraNome(nome: string): string {
  return `Seu nome é: ${nome}`;
}

const novoProduto: CadastroProduto = {
  id: 1,
  nome: "TypeStore",
  status: true,
  promocao: mostraPreco,
  prompt: mostraNome,
};

console.log(novoProduto);

//Nesse caso passaremos a funcao diretamente no objeto tipado da interface.
const produtoNovo: CadastroProduto = {
  id: 2,
  nome: "JavaStore",
  status: true,
  promocao: (preco: number): void => {
    console.log("O preço é: " + preco);
  },
  prompt: (nome: string): string => {
    return `Seu nome é: ${nome}`;
  },
};


// Mais um exemplo, agora passando as condições em uma funcao anonima.
interface somaProps {
  (valor1: number, valor2: number): number;

}

const somaNum: somaProps = (valor1: number, valor2: number): number => {  
  return valor1 + valor2  
} 
const total = somaNum(30, 20)
console.log("O total é: " + total)