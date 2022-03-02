// Interface é um conjunto de propriedades que quando chamada é obrigado seguir a estrutura definida nela.

interface Matricula {
nome: string;
id: number;
status: boolean;
}

// criando uma variavel do tipo da interface, "const variavel: nome da interface{propriedades da interface}"
const aluno: Matricula = {
  nome: "Ayrton",
  id: 26,
  status: true,
}

// utilizando interface dentro da função, informa que será um nomefuncao({propriedades da interface}: nome da interface), 
function alunoMatricula({nome, id, status}: Matricula): void{
 
 console.log(`Nome: ${nome}`)
  console.log(`Id: ${id}`)
  console.log(`Status: ${status}`)
 
  if(status === true){
    console.log(`${nome}, id: ${id}, encontra-se com a matrícula ativa`)
  }else{
    console.log(nome + " deve regularizar a situação")
  }
  



  console.log("======================")
}

alunoMatricula({nome: "Ayrton Rodrigues", id: 26, status: true})

alunoMatricula({nome: "Cintia Rodrigues", id: 24, status: false})

