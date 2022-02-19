/*Escribir un algoritmo que calcule la media de 100 números dados e imprima su resultado*/

let numeros = [1, 2, 5, 8, 9, 3, 4, 12, 19, 7]

const calcularMedia = (num) => {
    let cont = 0;
    let suma = 0;

    for(let i = 0; i < 10 ; i++) {
        suma += num[i];
        cont ++;
    }
    return suma/cont;
}

console.log((`La media de los dígitos es de ${calcularMedia(numeros)}`));