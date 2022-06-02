'use strict'

/**
 * Utilizando un bucle, mostrar la suma y la media de los números introducidos
 * hasta introducir un número negativo y luego mostrar el resultado
 * 
 */
var contador = 0;
var suma = 0;

do {
    var numero = parseInt(prompt('Introduce números hasta que ingreses un negativo', 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma += numero;

        contador++;
    }

} while(numero >=0 )

console.log('La suma es: ' + suma);
console.log('La media es: ' + suma/contador);
