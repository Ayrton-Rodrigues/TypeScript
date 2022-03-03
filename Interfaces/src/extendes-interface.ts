//Extendes nas interface

interface PropsJogos{
  readonly id: string;
  nome: string;
  descricao?: string;
  plataforma: string[]
}


const godOfWar: PropsJogos = {
  id: '23',
  nome: 'God Of War',
  descricao: 'Jogo baseado na mitologia grega',
  plataforma: ['PS3','PS4', 'PS5', 'PC']
}


interface Dlc extends PropsJogos{
  jogoOriginal: PropsJogos;
  conteudoNovo: string[]; 
}



const godOfWarNordico: Dlc = {
  jogoOriginal: godOfWar,
  id: '24',
  nome: 'God of War 4',
  descricao: 'Embarcaremos para as terras nórdicas',
  plataforma: ['PS4', 'PC', 'PS5'],
  conteudoNovo: ['Deuses Nórdicos', 'Modo de Batalha', 'Modo Fotografia']
}

console.log(godOfWarNordico)