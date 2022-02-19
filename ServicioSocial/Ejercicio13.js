/*Escribir   un   algoritmo   que   calcule   las   raíces   de   una   ecuación cuadrática 
cuya forma canónica es: Ax^2 + Bx + C = 0
Solo se calcularán raíces reales.
Si el discriminante en menor de 0, imprimir un mensaje que indique que existen dos raíces imaginarias. 
Los coeficientes A,B,C serán ingresados.*/

const A = 1;
const B = -12;
const C = 36;

const calcularDiscriminante = (a, b, c) => b*b - 4*a*c;

const D = calcularDiscriminante(A,B,C);
console.log(D)
   
const calcularRaizCuadraticaPositiva = (b,d) => {
    let x1 = -b + (Math.sqrt(d)) / 2
    let x2 = -b - (Math.sqrt(d)) / 2
    return x1, x2;
}
    
const calcularRaizCuadraticaNegativa = (b) => {
    return -b / 2;
}

const calcularRaizCuadraticaImaginaria = () => {
    return "Existen 2 raíces imaginarias";
}

if (D > 0 ) console.log(`La raíz cuadrática es ${calcularRaizCuadraticaPositiva(B, D)}`); 
else if (D == 0) console.log(`La raíz cuadrática es ${calcularRaizCuadraticaNegativa(B, D)}`);
else console.log(`La raíz cuadrática es ${calcularRaizCuadraticaImaginaria()}`);