//Algumas formas de passar os tipos em array

//Array<string> ou Array<string | number>


let unionArray: (string | number)[]; // Podemos utilizar o conceito do union type, no array.
unionArray = ["pato", 2]
unionArray.push("pata", 3)
console.log(unionArray)


let stringArray: string[]; //Declarando que o array será do tipo String
stringArray = ["Ayrton","Luis","Barbosa"]
stringArray.push("Rodrigues")
console.log(stringArray)


let numberArray: number[]; // do tipo Number
numberArray = [2, 3, 4]
numberArray.push(5)
console.log(numberArray)



