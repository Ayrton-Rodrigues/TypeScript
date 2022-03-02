// No tipo tupla, definimos na estrutura a forma que queremos que siga os tipos de elementos inseridos, por exemplo.

let Id: [string, number]; //dessa forma temos que seguir a regra sempre uma string seguida de um numero.

Id = ["Ayrton", 26]
// Id = ["ayrton", "ayrton"]  ele me apresenta um erro, informando que devo utilizar conforme a regra e inserir um number.
console.log(Id)


let pedidoDelivery: [string, string, string]

pedidoDelivery = ["em produção", "saiu para entrega", "entregue"]

pedidoDelivery.push("Não produzido", "Não saiu", "Não entregue") // para inserir atraves do push, tbm temos que seguir a regra atribuida.
console.log(pedidoDelivery)