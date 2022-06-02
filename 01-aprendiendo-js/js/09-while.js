// Activar el modo estricto de JS
'use strict'

var year = 2022;

// Bucle While
while ( year <= 2051 ) {
    console.log(year);

    if (year == 2030) {
        break; // Detener bucle
    }
    
    year++;
}

// Bucle Do While
var years = 30;

do {
    console.log("Solo cuando sea diferente > 25");
    years--;
} while (years > 25)