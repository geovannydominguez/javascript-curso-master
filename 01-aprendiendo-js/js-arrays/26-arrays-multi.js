'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['Lord of the rings', 'Gran Torino', 'Bob Sponja'];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);

console.log('\n');

// Adds new element to the end of the array
peliculas.push('Iron Man');
peliculas.push('Simpsons');
console.log(peliculas);

// Removes the last element from the array
peliculas.pop();

var index = peliculas.indexOf('Gran Torino');
if (index > -1) {
    console.log(peliculas.splice(index, 1));
}

console.log(peliculas);

// Convert all the elements of an array into a string, by default separated by comma.
console.log(peliculas.join());

console.log('\n');

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(",");
console.log(cadena_array);

