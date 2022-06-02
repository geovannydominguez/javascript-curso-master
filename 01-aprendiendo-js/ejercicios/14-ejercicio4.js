'use strict'

/**
 * Mostrar todos los impares entre dos números introducidos por el usuario
 */

var num1 = parseInt( prompt( 'Introduce el 1er número', 0 ) );
var num2 = parseInt( prompt( 'Introduce el 2do número', 0 ) );

for (let i = num1; i <= num2; i++) {
    if ( i%2 !=0 ) {
        console.log(i);
    }
}