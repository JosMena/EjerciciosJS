/*Escribir el algoritmo que lea una hora y que muestre la programación de acuerdo al horario en que se transmite 
“dibujos animados ” : Si es de 10 a 12 horas, 
“tele serie ” : si es de 13 a 16 horas, 
“novelas repetidas” :si es de 16 a 18 horas, 
“dibujos animados ” : si es de 18 a 22 horas,
“noticiero” : si es de 22 a 23 horas.*/

const hora = 15;

const calcularProgramacionTV = (hora) => {
    let programacionTV =  '';
    if (hora >= 10 && hora <= 12) programacionTV = "dibujos animados";
    else if (hora >= 13 && hora < 16) programacionTV = "tele serie";
    else if (hora >= 16 && hora < 18) programacionTV = "novelas repetidas"
    else if (hora >= 18 && hora < 22) programacionTV = "dibujos animados";
    else if (hora >= 22 && hora <= 23) programacionTV = "noticiero";
    else if (hora > 23) programacionTV = "No se encuentra algún programa disponible en este momento";

    return programacionTV;
}

console.log(`La programación de TV en este momento es ${calcularProgramacionTV(hora)}`);