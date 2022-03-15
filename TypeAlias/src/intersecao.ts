// Com o type Alias também podemos usar a interseção de type alias que é semelhante ao extends em interface. Dessa forma ao inves de utilizarmos o extends as "nomeInterface", usamos o & para fazer essa união.

//É possível criar objetos com type também.
type TimeFutebol = {
  id: string;
  nome: string;
  estado?: string;
}

type Titulos = {
  campeonato: string;
  quantidade: number;
}

// Como informado no inicio, utilizando o & podemos unir dois Type Alias
type TimeCompleto = TimeFutebol & Titulos

const registroTime: TimeCompleto = {
  id: "Urubu",
  nome: "Flamengo",
  estado: "Rio de Janeiro",
  campeonato: "Brasileirão",
  quantidade: 8  
}

console.log(registroTime)