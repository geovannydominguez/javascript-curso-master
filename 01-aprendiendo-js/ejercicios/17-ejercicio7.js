'use strict'

/**
 * Tabla de multiplicar de un número introducido por pantalla
 */
var num = parseInt(prompt('Enter a number', 0));

while(isNaN(num)) {
    num = parseInt(prompt('Enter a number', 0));
}

for (let i=0; i<=10; i++) {
    console.log(i + ' * ' + num + ' = ' + i*num);
}