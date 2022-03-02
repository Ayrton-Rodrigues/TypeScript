// Tipagem Dinamica

let curso = "String" // no typescript, a variavel curso só vai poder receber elementos do tipo String, diferente do js que poderia receber outros tipos.

curso = "TypeScript"
// curso = 2     nesse exemplo mostra o que foi escrito antes.

const array = ["pato", "elefante", "girafa"]

array.push("pata")
// array.push(2) . para ele aceitar tipo number deve declarar no inicio da variavel, pois depois ele não aceita.

console.log(curso)
console.log(array)



