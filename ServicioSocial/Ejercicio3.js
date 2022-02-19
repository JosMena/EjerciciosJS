/*Escribir   un   algoritmo   que   lea   una   cantidad   y   calcule   el   descuento considerando que 
si la cantidad dada está por encima de 100 el descuento es el 10% y si está por debajo de 100 el descuento es el 2%*/

const precio = 400;

const calcularDescuento = (cantidad) => {
    if (cantidad > 100) cantidad *=  .9
    else cantidad *= .98

    return cantidad
}

console.log(`El precio final del producto es ${calcularDescuento(precio)}`);