//Extendes nas interface

interface PropsJogos{
  readonly id: string;
  nome: string;
  descricao?: string;
  plataforma: string[];
}


const godOfWar: PropsJogos = {
  id: '23',
  nome: 'God Of War',
  descricao: 'Jogo baseado na mitologia grega',
  plataforma: ['PS3','PS4', 'PS5', 'PC']
}

//Podemos utilizar interfaces como forma de completar outras interface, utilizando o extends
interface Dlc extends PropsJogos{
  jogoOriginal: PropsJogos;
  conteudoNovo: string[]; 
}


//Podemos observar que podemos passar a interface completa ja definida ou item a item passando jogoOriginal: {id: string, nome: string;
//  descricao?: string; plataforma: string[]; }

// Usamos as propriedades da propsJogos e o conteudoNovo que foi passado na declaracao da interface
const godOfWarNordico: Dlc = {
  // jogoOriginal: godOfWar,
  jogoOriginal: godOfWar, // passei a interface ja definida
  id: '24',
  nome: 'God of War 4',
  descricao: 'Embarcaremos para as terras nórdicas',
  plataforma: ['PS4', 'PC', 'PS5'],
  conteudoNovo: ['Deuses Nórdicos', 'Modo de Batalha', 'Modo Fotografia']
}

console.log(godOfWarNordico)