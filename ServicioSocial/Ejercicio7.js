/*Escribir el algoritmo que permita emitir la factura correspondiente a unacompra de un articulo determinado, 
del que se adquieren una o varias unidades. El IVA es del 15% y si el precio neto ( precio venta mas IVA) 
es mayor de 50.00 pesos se debe realizar un descuento del 5%.*/

const precio_neto = 50;

const calcularIVA = (precio) => precio*.15;

const calcularDescuento = (precio) => {
    if (precio > 50) precio = precio *.95

    return precio
}

console.log(`El IVA es de ${calcularIVA(precio_neto)} y con el descuento el producto queda en ${calcularDescuento(precio_neto)}`);