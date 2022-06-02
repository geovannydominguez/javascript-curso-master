// Para utilizar modo estricto.
'use strict'

// 'var' define una variable global o local en una función sin importar el ámbito del bloque 

// 'let' permite definir variables limitando su alcance al bloque, declaración o expresión (ámbito)
// en donde se está usando

var numero = 40;
console.log(numero); // valor 40

if ( true ) {
    var numero = 50; // Aunque le ponga 'var', es la misma variable anterior.
    console.log(numero); // valor 50
}

console.log(numero); // valor 50


var texto = 'Curso JS Maestro';
console.log(texto);

if (true) {
    let texto = 'Curso JS nuevo bloque';  // esta es una variable local dentro de este bloque if
    console.log(texto);
}

console.log(texto);