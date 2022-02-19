/*Una  tienda  se  dedica  a  la  venta  de  computadoras,  cada  vendedor tiene un sueldo mensual 
pero además de su sueldo gana una comisión por venta: 
Si el monto de venta es mayor de 10,000 la comisión será del 15%.
Si el monto de venta es mayor o igual a 5,000 y menor de 10,000 lacomisión es del 5%. 
Si el monto de la venta es menor que 5,000 no tiene comisión.   
Escribir   un   algoritmo   que   calcule   el   sueldo   total   de   cada vendedor.*/

const monto_venta = 12000;

const calcularComision = (monto) => {
    if (monto >= 10000) monto *= .15
    else if (monto >= 5000 && monto < 10000) monto *= .5
    else monto = 0;

    return monto;
}

console.log(`El salario total es el salario base más la comisión de ${calcularComision(monto_venta)}`);