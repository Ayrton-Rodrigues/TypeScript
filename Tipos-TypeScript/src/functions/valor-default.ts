// Podemos utilizar valores default nas funções, como observado abaixo ao usar o parametro "nome" com o "=" ele se torna um valor não obrigatório e podendo passar um valor default a ser exibido. No parametro "idade", quando utilizamos o "?" ele se torna um item não obrigatório.

function cadastro(
  email: string,
  senha: string,
  nome = "Aluno",
  idade?: number
): object {
  const data = { email, senha, nome, idade };
  return data;
}

// console.log(cadastro("test@test.com", "121212"));


//Desse jeito estou informando que o valor padrão do status é false.
function statusLoja(nome: string, email: string, status = false): string {
  if (status === true) {
    return "Loja aberta";
  } else {
    return "loja fechada";
  }
}

console.log(statusLoja("Donalds", "donalds@test.com", true));
