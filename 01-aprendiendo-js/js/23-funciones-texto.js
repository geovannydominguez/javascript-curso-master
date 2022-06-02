'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso curso máster JavaScript";
var texto2 = "Esto es interesante"

console.log( numero.toString(), ' es de tipo '+ typeof(numero.toString()));
console.log(texto1.toUpperCase());
console.log(texto2.toLocaleLowerCase());

console.log('\n');

console.log(texto2, ' tiene ',texto2.length, ' caracteres de longitud.');

console.log('\n');

console.log(texto1 + " " + texto2);
console.log(texto1.concat(" " + texto2));

console.log('\nBúesquedas');

console.log(texto1.indexOf("curso"));
console.log(texto1.lastIndexOf("curso"));
console.log(texto2.search("curso"));
console.log(texto1.match("curso"));
console.log(texto1.match(/(curso)/g));
console.log(texto1.startsWith('Bien'));
console.log(texto2.includes('interesante'));


console.log('\nReemplazar');

console.log(texto1.replace("JavaScrtip","Angular"));
console.log(texto1.slice(20, 30));
console.log(texto1.split(" "));