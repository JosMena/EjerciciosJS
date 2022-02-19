/*Dado un número n, escribir un algoritmo que determine la suma de sus dígitos*/

let numero = [1, 2, 5]

const sumatoriaDigitos = (num) => {
    let suma = 0;
    for(let i = 0; i < 3 ; i++) suma += num[i]

    return suma;
}

console.log((`La suma de los dígitos es de ${sumatoriaDigitos(numero)}`));