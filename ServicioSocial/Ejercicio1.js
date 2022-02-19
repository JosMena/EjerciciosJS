//Especificaciones
/*A un trabajador le pagan según sus horas trabajadas y una tarifa de pago por hora. 
Si la cantidad de horas trabajadas es mayor a 40 horas, la tarifa   se   incrementa   en   un   50%   para   las   horas   extras.   
Escribir un algoritmo que calcule el salario del trabajador dadas las horas trabajadas y la tarifa*/


const horas_trabajadas = 50;
const salario = 40; //Salario por hora
 
let tarifa = 0; //Bono extra al salario
let salario_final  = 0; 

if (horas_trabajadas>40) {
    tarifa = horas_trabajadas - 40;
    tarifa *= salario * 1.5;
}

salario_final = (salario * horas_trabajadas) + tarifa;
console.log(salario_final);