/*Realizar un algoritmo que permita pedir 50 números naturales y 
determine e imprima cuántos son pares, impares, positivos y negativos*/

let num = Math.ceil(Math.random()*100);
const numerosNaturales = Array(50).fill(num);

const calcularPares = (A) => {
    let cont = 0;

    for(let i = 0; i < 50 ; i++){
         if(A[i] % 2 == 0){
            cont ++;
        } 
    }
    return cont; 
}

const calcularImpares = (A) => {
    let cont = 0;

    for(let i = 0; i < 50 ; i++){
         if(A[i] % 2 !== 0){
            cont ++;
        } 
    }
    return cont; 
}

const calcularPositivos = (A) => {
    let cont = 0;

    for(let i = 0; i < 50 ; i++){
         if(A[i] >= 0){
            cont ++;
        } 
    }
    return cont; 
}

const calcularNegativos = (A) => {
    let cont = 0;

    for(let i = 0; i < 50 ; i++){
         if(A[i] < 0){
            cont ++;
        } 
    }
    return cont; 
}

console.log((`La cantidad de números pares es de ${calcularPares(numerosNaturales)}`));
console.log((`La cantidad de números impares es de ${calcularImpares(numerosNaturales)}`));
console.log((`La cantidad de números positivos es de ${calcularPositivos(numerosNaturales)}`));
console.log((`La cantidad de números negativos es de ${calcularNegativos(numerosNaturales)}`));