// Union-type serve para informar que uma variavel pode receber mais de um tipo de elemento, mas o ideal é que sejam 2 tipos.

let userId: string | number;

userId = 2;
console.log(userId)
userId = "2s"
console.log(userId)