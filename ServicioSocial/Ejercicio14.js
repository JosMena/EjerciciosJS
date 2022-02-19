/*"TIENDAS PATITO" se encuentra de aniversario y ha programado una serie de ofertas con la finalidad de brindar facilidades 
a sus clientes y a la vez de incrementar sus ventas. Estas ofertas se basan específicamente en un porcentaje de descuento 
sobre el total de compra el cual varia de acuerdo al monto. Por un monto mayor o igual a $500 se hará un descuentodel 30%. 
Por un monto menor de $500 pero mayor o igual a 200 se hará un descuento del 20%.
Por un monto menor de $200 pero mayor o igual a 100 se hará un descuento del 10%. 
Escribir un algoritmo que calcule la cantidad total a pagar de una compra.*/

const monto = 300;

const calcularDescuento = (precio) => {
    if (precio >= 500) precio *= .7
    else if (precio < 500 && precio >= 200) precio *= .8
    else if (precio < 200 && precio >= 100) precio *= .9

    return precio;
}

console.log(`La cantidad total a pagar es ${calcularDescuento(monto)}`);