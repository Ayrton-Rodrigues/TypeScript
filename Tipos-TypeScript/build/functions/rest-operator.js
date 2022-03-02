"use strict";
function numeros(...num) {
    const total = num;
    const totalNum = total.reduce((acum, atual) => {
        console.log(acum + atual);
        return acum + atual;
    }, 0);
    return `O total é: ${totalNum}`;
}
console.log(numeros(2, 3, 4, 6, 10));
