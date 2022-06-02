'use strict'

/**
 * Calculadora
 * - Pida dos números por pantalla
 * - Si no son números, volver a pedir
 * - Resultado de sumar, restar, multiplicar y dividir estos dos números
 */

var num1 = parseInt(prompt('Enter number one', 0));
var num2 = parseInt(prompt('Enter number two', 0));

while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt('Enter number one', 0));
    num2 = parseInt(prompt('Enter number two', 0));
}

console.log('La suma es: ', num1 + num2);
console.log('La resta es: ', num1 - num2);
console.log('El producto es: ', num1 * num2);
console.log('La división es: ', num1 / num2);