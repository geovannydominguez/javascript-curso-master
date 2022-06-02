// Activar el modo estricto de JS
'use strict'

var edad = 18;
var mensaje = '';

switch (edad) {
    case 18:
        mensaje = 'Acabas de cumplir la mayoria de edad';
        break;
    case 25:
        mensaje = 'Ya eres un adulto';
        break;
    case 40:
        mensaje = 'Crisis de los 40';
        break;
    default:
        mensaje = 'Tu edad es neutra';
        break;
}

console.log(mensaje);