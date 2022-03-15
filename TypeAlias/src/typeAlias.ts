//Type alias é uma espécie de interface mas como se fosse uma variável que podemos reutilizar de diversas formas respeitando o que foi atribuido na declaração. ex:

type Id = number | string


function entrar(id: Id, nome: string){
  console.log(`Id: ${id}: ${nome}, acaba de logar!`)
}

entrar(24, "Ayrton")

//Podemos tanto definir tipos como uma lista personalizada
type Motorola = "MOTO-G1" | "MOTO-G2" | "MOTO-G3" | "MOTO-G4"

function qualCelular(celular: Motorola) {
  console.log(`Foi informado ${celular} para formatação`)
}
qualCelular("MOTO-G1")