'use strict'
 
/**
 * Determinar si un número es par o impar
 * 1. Ventana promt
 * 2. Si no es válido, que nos vuelva a pedir el número
 */

var numero = parseInt( prompt( 'Ingrese un número', 0 ) );

while (isNaN(numero)) {
    numero = parseInt( prompt( 'Ingrese un número', 0 ) );
}

if ( numero%2 == 0 ) {
    console.log('El número ' + numero + ' es par');
} else {
    console.log('El número ' + numero + ' es impar');
}