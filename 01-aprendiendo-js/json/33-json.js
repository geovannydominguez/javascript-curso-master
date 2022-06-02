'use strcit'

// JSON - JavaScript Object Notation

/**
 * Forma
 * {
 *  nombre_propiead: valor
 * }
 * 
 */

var pelicula = {
    titulo: 'The Lord of The Rings',
    year: 2002,
    pais: 'USA'
};

var peliculas = [
    pelicula,
    {
        titulo: 'Matrix Resurrecciones',
        year: 2021,
        pais: 'USA'
    },
];

console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
for (let index in peliculas) {
    var p = document.createElement('p');
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}