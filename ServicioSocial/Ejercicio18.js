/*Dadas N notas de un estudiante, escribir un algoritmo que calcule:
a) Cuántas notas tiene desaprobadas.
b) Cuántas aprobadas.
c) El promedio de notas.
d) El promedio de notas aprobadas y el de desaprobadas*/

const notas = [10, 5, 2, 3 , 8, 7, 9];

const calcularNotasAprobadas = (A) => {
    let aprobadas = 0;
    let promedio_aprobadas = 0;

    for(let i = 0; i < 7 ; i++){
         if(A[i] > 5){
            aprobadas ++;
            promedio_aprobadas += A[i];
        } 
    }

    return promedio_aprobadas/aprobadas; 
}

const calcularNotasReprobadas = (A) => {
    let reprobadas = 0;
    let promedio_reprobadas = 0;

    for(let i = 0; i < 7 ; i++){
         if(A[i] < 6){
            reprobadas ++;
            promedio_reprobadas += A[i];
        } 
    }

    return promedio_reprobadas/reprobadas; 
}

const calcularPromedio = (A,) => {
    let promedio = 0;
    let cont = 0;
    for(let i = 0; i < 7 ; i++){
         promedio += A[i];
         cont++;
    }

    return promedio/cont; 
}

console.log((`El promedio de materias aprobadas es de ${calcularNotasAprobadas(notas)}`));
console.log((`El promedio de materias reprobadas es de ${calcularNotasReprobadas(notas)}`));
console.log((`El promedio de materias es de ${calcularPromedio(notas)}`));