/*Escribir un algoritmo que lea un tiempo en minutos y que calcule los días,horas y minutos que le corresponden*/

const tiempo_minutos = 1440;

const tiempo_horas = (tiempo) => tiempo /=60

const tiempo_dias = (tiempo) => tiempo /=1440

console.log(`El equivalente a horas es ${tiempo_horas(tiempo_minutos)} y el equivalente a días es ${tiempo_dias(tiempo_minutos)}`);