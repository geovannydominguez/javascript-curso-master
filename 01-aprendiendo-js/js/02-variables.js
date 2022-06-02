// Para utilizar modo estricto.
'use strict'

// VARIABLES
// Una variable es un contenedor de información

// 'var' define una variable global o local en una función sin importar el ámbito del bloque 
var pais = "Ecuador";
var continente = "America";
var anio = 2022;
var pais_continente = pais+' '+continente;


// 'let' permite definir variables limitando su alcance al bloque, declaración o expresión (ámbito)
// en donde se está usando
let prueba = 'hola';

pais = 'España';
continente = 'Europa';

console.log(pais, continente, anio);
alert(pais_continente);