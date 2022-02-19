/*Modificar el ejercicio 1 para obtener la suma de los salarios de 200trabajadores.*/

let num = Math.ceil(Math.random()*80);
const trabajadoresHorasTrabajadas = Array(200).fill(num);

const salario = 100;

const calcularSalario = (A, sueldo) => {
    let salarios = 0; 
    for (let i = 0; i < 200; i++){
        let tarifa = 0;
        if (A[i] > 40) {
            tarifa = A[i] - 40;
            tarifa *= sueldo * 1.5;
        }
        salarios += (A[i] * sueldo) + tarifa;
    }

    return salarios;
}

console.log((`El salario total de los trabajadores es de ${calcularSalario(trabajadoresHorasTrabajadas, salario)}`));