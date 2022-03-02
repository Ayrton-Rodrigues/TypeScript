//Devemos informar o tipo do parametro que será recebido e o que será retornado na função.

let n1: number = 10;
let n2: number = 5;

// Como orientado no inicio, o parametro "valor1" está tipado como number podendo receber apenas tipos numbers como o "valor2" e o retorno da função tbm está informando o tipo a ser retornado.


function soma(valor1: number, valor2: number): number{
  let adicao = valor1 + valor2;
  return adicao
}

console.log(soma(n1, n2))


// Uma função que recebe 2 numbers e retorna uma string

function somaSecond(valor1: number, valor2: number): string{
  let adicao = valor1 + valor2;
  if(adicao > 20){
    return "Maior que 20"
  } else{
   return "Menor que 20"
  }
  
}
console.log(somaSecond(n1, n2))


//mais um caso, agora com string
//Para receber um parametro e retornar o tipo string
function user(username: string):string{
  let message = "Bem vindo"
  return `${message} ${username}`
}

console.log(user("Ayrton"))