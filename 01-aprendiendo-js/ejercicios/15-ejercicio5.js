'use strict'

/**
 * Muestre todos los números divisores de un número introducido en prompt
 */
var numero = parseInt( prompt( 'Introduce un número', 0 ) );
var divisor = numero;

while (divisor >=0) {
    if ( numero%divisor == 0) {
        console.log('El número ' + divisor + ' es divisor de ' + numero);
    }
    divisor--;
}