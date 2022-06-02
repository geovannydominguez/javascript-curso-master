'use stric'

/**
 * 1. Pedir 6 números por pantalla y los guarde en un array
 * 2. Mostrar el array entero
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Buscar un valor introducido por el usuario, que nos diga si lo entriencay su indice.
 */

var numeros = new Array(6);

for (let i = 0; i <= 5; i++) {
    let numero = parseInt(prompt('Introduce el número ' + (i + 1), 0));
    while (isNaN(numero)) {
        numero = parseInt(prompt('Introduce el número ' + (i + 1), 0));
    }
    numeros[i] = numero;
}

console.log(numeros);
console.log('\n Array Ordenado');
console.log(numeros.sort());

console.log('\n Array Invertido');
console.log(numeros.reverse());

console.log('\n Array longitud');
console.log(numeros.length);

// Busqueda

var numero = parseInt(prompt('Que numero desea buscar', 0));
var index = numeros.findIndex(num => num == numero);
if (index > 1) {
    console.log(numero + ' Si existe dentro del array en la posicion ' + index);
} else {
    console.log(numero + ' No existe dentro del array');
}