'use strict'

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor, menor y si son iguales.
 * PLUS: Si los números no son números válidos o menores a cero, volver a pedir los números
 */
var num1 = parseInt(prompt('Introduce el primer número', 0));
var num2 = parseInt(prompt('Introduce el segundo número', 0));

console.log(num1, num2);

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt('Introduce el primer número', 0));
    num2 = parseInt(prompt('Introduce el segundo número', 0));
}

if (num1 == num2) {
    console.log('Los números son iguales');
} else if (num1 > num2) {
    console.log('El número1 ' + num1 + ' es mayor que el número2 ' + num2 );
} else if (num2 > num1) {
    console.log('El número2 ' + num2 + ' es mayor que el número1 ' + num1 );
} else {
    console.log('introduce números correctos');
}