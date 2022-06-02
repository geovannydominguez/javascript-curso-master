// Activar el modo estricto de JS
'use strict'

// Constantes
// Como una variable, pero su valor no puede cambiar.

var web = 'http://localhost'
const ip = '127.0.0.1';

web = 'http://geovanny.dominguez';

// Esto no se puede hacer
//ip = '192.168.0.1'; // Uncaught TypeError: Assignment to constant variable.

console.log(web, ip);