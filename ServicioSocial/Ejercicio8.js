/*Escribir   el   algoritmo   que   muestre   el   mensaje   de   acuerdo   a   la   edad ingresada: 
Si la edad es de 0 a 10 años “niño”, 
si la edad es de 11 a 14años “púber” , 
si la edad es de 15 a 18 años “adolescente” , 
si la edades de 19 a 25 años “joven” , 
si la edad es de 26 a 65 años “adulto” , 
si la edad es mayor de 65 “anciano”.*/

const hora = 35;

const calcularEdad = (edad) => {
    let rangoEdad =  '';
    if (edad >= 0 && edad <= 10) rangoEdad = "niño";
    else if (edad >= 11 && edad <= 14) rangoEdad = "púber";
    else if (edad >= 15 && edad <= 18) rangoEdad = "adolescente"
    else if (edad >= 19 && edad <= 25) rangoEdad = "joven";
    else if (edad >= 26 && edad <= 65) rangoEdad = "adulto";
    else if (edad >65) rangoEdad = "anciano";

    return rangoEdad;
}

console.log(`El rango de edad ingresado es ${calcularEdad(hora)}`);