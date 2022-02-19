/*El ing. De sistemas de un banco de crédito necesita conocer de unalista de 2500 cuentas 
cuál es la que posee mayor cantidad y cuál es la que posee menor cantidad, de dinero. 
Escriba un algoritmo que realice lo anterior, sin ordenar las cuentas.*/

const cuentas = [200, 1541, 615, 8641, 6851, 651, 54547, 6851, 21, 651];

const mayorCantidad = (arreglo) => {
    let cuenta_mayor = 0;

    for(let i = 0; i < 10; i++){
        if(arreglo[i] > cuenta_mayor) cuenta_mayor = arreglo[i];
    }

    return cuenta_mayor;
}

const menorCantidad = (arreglo) => {
    let cuenta_menor = 1000;

    for(let i = 0; i < 10; i++){
        if(arreglo[i] < cuenta_menor) cuenta_menor = arreglo[i];
    }

    return cuenta_menor;
}

console.log((`La cuenta con mayor cantidad tiene ${mayorCantidad(cuentas)} y la que tiene menor cantidad es ${menorCantidad(cuentas)}`));