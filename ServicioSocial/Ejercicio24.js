/*Escribir un algoritmo que lea varios caracteres, uno a la vez, y quese detenga cuando sea dada alguna de las vocales y la escriba*/

const caracteres = ["t","u","t","o","a","u","l","a"];

const leerCaracteresVocales = (cadena) => {
    let cont = '';
    for (let i = 0; i < 8; i++){
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' ||cadena[i] == 'o' ||cadena[i] == 'u') cont += cadena[i]
    }
    return cont;
}

console.log((`Las vocales que se encuentran en la cadena son ${leerCaracteresVocales(caracteres)}`));