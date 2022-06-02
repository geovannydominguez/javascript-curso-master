// Activar el modo estricto de JS
'use strict'

// Condicional IF

var edad1 = 30;
var edad2 = 12;

/*
// Operadores relacionales
    >
    <
    >=
    <=
    ==
    !=
*/

if (edad1 > edad2) {
    console.log("Edad1 " + edad1 + " es mayor que Edad2 " + edad2);
} else {
    console.log("Edad1 es menor");
}

/* 
// Operadores Lógicos
    AND(Y): &&
    OR(O): ||
    Negación: !
 */

var year = 2022;

// Negación
if (year != 2016) {
    console.log("El año no es 2016, realmente es: " + year);
}

// AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}


// OR
if (year >= 2008 || year <= 2018) {
    console.log("El año acaba en 8");
}
