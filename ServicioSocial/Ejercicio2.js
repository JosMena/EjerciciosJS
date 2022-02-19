//Especificaciones
/*A un  trabajador le descuentan de su sueldo el 10% si su sueldo es menor o igual a 1000, 
por encima de 1000 y hasta 2000 el 5% del adicional, y por encima de 2000 el 3% del adicional. 
Escribir un algoritmo que calcule el descuento y sueldo neto que recibe el trabajador dado su sueldo*/

const sueldo_base = 5000;

const calcularSueldo = (sueldo) => {
    if (sueldo <= 1000) sueldo *= .9
    else if (sueldo <= 2000) sueldo *= .85
    else sueldo *= .82

    return sueldo;
}

let sueldo_descuento = calcularSueldo(sueldo_base);

console.log(`El descuento aplicado es de ${sueldo_base - sueldo_descuento} y el salario neto es de ${sueldo_descuento}`);