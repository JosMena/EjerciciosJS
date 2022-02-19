/*Desarrollar un algoritmo para calcular e imprimir el factorial de unnúmero dado*/

const numero = 5;

const calcularFactorial = (num) => {
    let suma = 1; 

    for (let i = 1; i <= num; i++){
         suma *= i;
    }

    return suma;
}

console.log((`El factorial de ${numero} es ${calcularFactorial(numero)}`));