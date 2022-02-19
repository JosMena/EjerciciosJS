/*Escribir un algoritmo que lea las horas trabajadas de una persona y 
la tarifa de pago para calcular su salario e imprimirlo*/

const salario_hora = 200; //Salario por hora
const horas_trabajadas = 50;

const calcularSalario = (salario, cant_horas) => salario * cant_horas;

console.log(`El salario del trabajador es de ${calcularSalario(salario_hora, horas_trabajadas)}`);