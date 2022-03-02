// O rest operator permite que passemos parametros mesmo sem saber a quantidade do mesmo, e ele é uma instancia de array permitindo que seja utilizado os metodos do construtor array, map, filter, reduce ...etc


function numeros(...num: number[]): number | string{

  const total = num
  const totalNum = total.reduce((acum: number, atual: number): number => { 
    console.log(acum + atual)
    return acum + atual
  },0)

  return `O total é: ${totalNum}`
}

console.log(numeros(2, 3 ,4, 6, 10))