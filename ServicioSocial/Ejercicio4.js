/*Escribir un algoritmo que lea un tiempo en segundos y que calcule los segundos 
restantes que le correspondan para convertirse exactamente en minutos*/

const tiempo_segundos = 200;

const tiempo_minutos = (tiempo) => { 
    if (tiempo > 60) tiempo %= 60

    return 60-tiempo;
}

console.log(`Los segundos restantes para conformar un minuto son ${tiempo_minutos(tiempo_segundos)}`);