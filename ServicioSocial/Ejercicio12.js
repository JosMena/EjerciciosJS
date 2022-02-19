/*Katthy organiza una fiesta en la cual una computadora controla el ingreso mediante 5 claves. 
Si se ingresa al menos una clave incorrecta la computadora imprimirá "TE   EQUIVOCASTE   DE   FIESTA"   
y no permitirá el ingreso. Si las 5 claves son correctas imprimirá "BIENVENIDO A LA FIESTA".
Escribir un algoritmo que realice lo anterior.
Las Claves son: 1:"TIENES" 2:"QUE SER" 3:"INVITADO" 4:"PARA" 5:"INGRESAR"*/

const clave1 = "TIENES";
const clave2 = "QUE NO SER";
const clave3 = "INVITADO";
const clave4 = "PARA";
const clave5 = "INGRESAR";

const calcularClaves = (pass1, pass2, pass3, pass4, pass5) => {
    let permiso = false;
    if (pass1 == "TIENES" && pass2 == "QUE SER" && pass3 == "INVITADO" && pass4 == "PARA" && pass5 == "INGRESAR") permiso = true;

    return permiso;
}

console.log(`El ingreso a la fiesta es ${calcularClaves(clave1, clave2, clave3, clave4, clave5)}`);