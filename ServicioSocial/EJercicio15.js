/*Escribir un algoritmo que permita escoger en un conjunto de números  naturales: 
Cuáles son menores que 15.
Cuáles son mayores de 50.
Cuáles están comprendidos entre 25 y 50.
El algoritmo termina con el ingreso de un número negativo*/

const numeros = [15,50,12,0];

const validarNumeros = (num) => {
    const naturalesMenores15 = [];
    const naturalesMayores50 = [];
    const naturalesEntre25_50 = [];

    while (num >= 0){
        if (num < 15) naturalesMenores15.push(num)
        else if (num > 50) naturalesMayores50.push(num)
        else if (num >= 25 && num <=50) naturalesEntre25_50.push(num)
        else console.log('No se encuentra en los rangos definidos');
    }

    return naturalesMenores15, naturalesMayores50, naturalesEntre25_50;
}

console.log(`${validarNumeros(numeros)}`);