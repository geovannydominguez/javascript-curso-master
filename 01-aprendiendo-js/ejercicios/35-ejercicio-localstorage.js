'use strict'

var formulario = document.querySelector('#miFormulario');
formulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#pelicula').value;
    if (titulo.length > 0) {
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector('#peliculas-list');
for (let i in localStorage) {

    if (typeof (localStorage[i]) == 'string') {
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }
}

// Eliminar
var eFormulario = document.querySelector('#borrarFormulario');
eFormulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#borrarPelicula').value;
    if (titulo.length > 0) {
        localStorage.removeItem(titulo);
    }
});


function rowSumOddNumbers(n) {
    var firstOddNumber = n * (n - 1) + 1;
    var result = 0;
    for (let i = firstOddNumber; i <= (firstOddNumber + ((n - 1) * 2)); i += 2) {
        result += i;
    }
    console.log(result);
}

function sum_digits(n) {
    while (n >= 10) {
        //var strNumbers = n.toString().split('');
        /*n = 0;
        for (let i = 0; i < strNumbers.length; i++) {
            n += parseInt(strNumbers[i]);
        }*/
        n = n.toString().split('').reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        })
        console.log(n);
    }

    //console.log(n);
}