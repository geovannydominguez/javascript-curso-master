'use strict'

/**
 * Hacer un programa que muestre todos los números entre dos números introducidos por el usuario
 */

var numero1 = parseInt(prompt('Introduce el 1er número',0));
var numero2 = parseInt(prompt('Introduce el 2do número',0));

if (isNaN(numero1)) {
    numero1 = 0;
}
if (isNaN(numero2)) {
    numero2 = 0;
}

for (let i = numero1; i <= numero2; i++) {
    console.log(i);
}