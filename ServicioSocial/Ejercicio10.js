/*Dadas 3 longitudes, escribir un algoritmo que determine mediante unmensaje si tales longitudes forman un triangulo: 
equilátero (cuando sus tres lados son iguales), 
isósceles (cuando dos de sus lados son iguales) o 
escaleno (cuando sus tres lados son diferentes), 
o no forman triangulo (cada lado tiene que ser menor que la suma de los otros dos).*/

const longitud1 = 12;
const longitud2 = 10;
const longitud3 = 11;

const calcularTipoDeTriangulo = (long1, long2, long3) => {
    let tipo_triangulo = '';
    if (long1 > long2 + long3 && long2 > long1 + long3 && long3 > long1 + long2) tipo_triangulo = "No es un triángulo";
    else if (long1 == long2 && long2 == long3) tipo_triangulo = "Triángulo Equilátero";
    else if (long1 == long2 || long2 == long3) tipo_triangulo = "Triángulo Isósceles";
    else if (long1 !== long2 && long2 !== long3) tipo_triangulo = "Triángulo Escaleno";
    else tipo_triangulo = "Indefinido";

    return tipo_triangulo;
}

console.log(`El triángulo que corresponde a las longitudes es ${calcularTipoDeTriangulo(longitud1, longitud2, longitud3)}`);