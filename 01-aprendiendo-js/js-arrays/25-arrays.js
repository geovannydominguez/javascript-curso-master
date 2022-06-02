'use strict'

// Arrays

var nombre = 'Geovanny Dominguez';
var nombres = ['Joaquin Domin', 'Amelia Dom', 'Geovanny Dom', 4, true];

var lenguajes = new Array("JS", "Java", "Kotlin", "Swift");

console.log(nombres);
console.log(lenguajes);

console.log('\n Recorrer Arrays');

// 1. ForEach recibe una función Callback
lenguajes.forEach((value, index, array) => {
    console.log(value, ' en índice ' + index);
});

console.log('\n');

// 2. ForEach recibe una función Callback
// Los parámetros index y array pueden ser opcionales
// Al ser un sólo parámetro, el paréntesis también es opcional
lenguajes.forEach(value => {
    console.log(value);
});


console.log('\n For in');

for (let indice in lenguajes) {
    console.log(lenguajes[indice]);
}

console.log('\n For of');

for (let element of lenguajes) {
    console.log(element);
}

console.log('\n find()');

// Busquedas
// 1. find recibe una funcion callback
var result = lenguajes.find(function (lenguaje) {
    return lenguaje == 'JS';
});
console.log(result);

// 2. De una forma más compacta, la funcion callback a funcion flecha
// Al ser un solo parámetro, el paréntesis es opcional
result = lenguajes.find( lenguaje => {
    return lenguaje == 'JS';
});
console.log(result);

// 2. De una forma más compacta, la funcion callback a funcion flecha
// Al ser un solo parámetro, el paréntesis es opcional
// Al ser un sólo return, el return y las {} son opcionales
result = lenguajes.find( lenguaje => lenguaje == 'JS');
console.log(result);

console.log('\n findIndex()');
result = lenguajes.findIndex( lenguaje => lenguaje == 'Kotlin');
console.log(result);

console.log('\n some()');
var precios = [10,20,30,50,80,12];
result = precios.some( precio => precio >= 20);
console.log(result);