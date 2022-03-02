// Para afirmar que o elemento é do tipo

let statusAtual: unknown = 1; // tipo unknown pode ser qualquer tipo

let mudaStatus: number = 0;

// mudaStatus = statusAtual atribuindo o statusAtual dessa forma retorna um erro, pois mudaStatus só aceita tipo number e unknown não é

// Dessa forma temos que afirmar que statusAtual é um number

mudaStatus = statusAtual as number

// outra maneira é
// mudaStatus = <number>statusAtual

console.log(mudaStatus)


let query: unknown = "Pizza"

let searchTerm: string = query as string

console.log("Termo procurado:", searchTerm)