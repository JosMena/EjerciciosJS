/*Escribir un algoritmo que permita calcular y mostrar el jornal mensual de una empresa 
de acuerdo con las siguientes especificaciones:
·los trabajadores tienen dos turnos (nocturno y diurno)
·la tarifa de las horas diurnas es de 10 pesos.
·La tarifa de las nocturnas es de 20 pesos.
·Ningún trabajador recibe nada por sábados o domingos.
·El trabajador será despedido si sus horas trabajadas son menores que 15*/

const turno = 1; //Diurno = 1 ; Nocturno = 2

const horas = 60;

const calcularSalario = (turno, horas) => {
    let salario = 0;
    if (horas >= 15){
        if (turno == 1) salario += horas*10
        else if (turno == 2) salario += horas*20 
    }
    
    return salario;
}

console.log((`El salario es de  ${calcularSalario(turno, horas)}`));