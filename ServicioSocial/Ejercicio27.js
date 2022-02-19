/*Escribir un algoritmo que determine cuántos trabajadores recibiránun salario mayor o igual a  500, 
dadas la tarifa y las horas trabajadas.*/

const trabajadores = [35, 48, 68, 64, 48, 648, 15, 53];
const tarifa = 15;

const determinarSalario = (A) => {
    let cont = 0;
    for(let i = 0; i < 8; i++){
        if (A[i]*tarifa >= 500) cont++
    }

    return cont;
}

console.log((`El número de trabajadores que recibirá un salario igual o mayor a 500 es de ${determinarSalario(trabajadores)}`));