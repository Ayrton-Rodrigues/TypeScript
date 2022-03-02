

//forma padrão de function
function retornaApi(url: string): string{ 
  return url 
}
//transformando para arrow

const retornoApi = (url: string): void => {
console.log("a url é: " + url)
}

console.log(retornoApi("google.com"))