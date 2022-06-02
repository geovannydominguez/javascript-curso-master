'use strict'

// Funciones
// Una agrupación reutilizable de un conjunto de instrucciones.
// Conjunto de órdenes que se van a ejecutar cuando se llame a la función.

function calculator(num1, num2, show = false) {

    if (show) {
        byConsole(num1, num2);
    }

    return 'Hey, this is a calculator';
}

function byConsole(num1, num2) {
    console.log('La suma es: ', num1 + num2);
    console.log('La resta es: ', num1 - num2);
    console.log('El producto es: ', num1 * num2);
    console.log('La división es: ', num1 / num2);
}

console.log(calculator(20, 5, true));
