'use strict'

// Plantillas de texto

var nombre = prompt('Escriba su nombre');
var apellido = prompt('Escriba su apellido');

var texto = "Mi nombre es " + nombre + " y mi apellido es " + apellido;
console.log(texto);

// Para las plantillas, utilizar `` backticks
texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;
document.write(texto);
