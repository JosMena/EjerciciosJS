/*Escribir un algoritmo que calcule la suma y el producto de los números pares comprendidos entre 20 y 400 incluyendo ambos*/

const calcularSumaPares = () => {
    let suma = 0;
    for (let i = 20; i < 400; i+2) suma += i;
    return suma;
}

const calcularProductoPares = () => {
    let multiplicacion = 0;
    for (let i = 20; i < 400; i+2) multiplicacion += i;
    return multiplicacion;
}

console.log((`La suma de los números de 20 a 400 que sean pares es${calcularSumaPares()}`));
console.log((`El producto de los números de 20 a 400 que sean pares es${calcularProductoPares()}`));