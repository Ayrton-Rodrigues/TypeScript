//Array nas interfaces, aprenderei como aproveitar uma array de uma interface em outra.

interface JogosProps{
  nome: string;
  ano: number;
  descricao?: string; // propriedade opcional
}

interface JogosFavoritosProps{
  jogos: JogosProps[] // passei a interface jogosProps como se fosse uma array da propriedade jogos que vai conter todas as propriedades da mesma.
}

const jogosFavoritos: JogosFavoritosProps =  {
  jogos: [
          {nome: "God Of War", ano: 2003, descricao: "Melhor jogo que existe"},
          {nome: "Super Mario", ano: 1990}// Não foi passado nada na propriedade descricao por ser facultativo a atribuicao de valor.
         ] 
}

console.log(jogosFavoritos.jogos[1])


//==================================================================================================================================================//

// Dessa forma passamos o array direto na interface, diferente do modo acima que nós criamos um array contendo(heranca) props de outra interface.
interface ArrayProps{
  props: string[]
}

const propriedadeArray: ArrayProps = {
  props: ["map", "reduce", "ForEach"]
}

console.log(propriedadeArray)