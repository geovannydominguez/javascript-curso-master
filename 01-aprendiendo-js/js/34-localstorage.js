'use strict'

// Local Storage - Desde el HTML 5 

// Verificar compatibilidad o si Local Storage está disponible
if (typeof (Storage) !== 'undefined') {
    console.log('LocalStorage disponible');
} else {
    console.log('Incompatible con LocalStorage');
}

// Guardar datos en LocalStorage
localStorage.setItem("myTitle", "Curso de JS LocalStorage");

// Recuperar dato desde el LocalStorage
console.log(localStorage.getItem("myTitle"));


// Guardar objetos en el LocalStorage
var usuario = {
    nombre: 'Geovanny',
    email: 'test1@gmail.com'
}
// primero convertir el objeto JSON a JSON string
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto JSON desde el localStorage
// primero convertir el string a JSON
console.log(JSON.parse(localStorage.getItem("usuario")));

// Eliminar datos del LocalStorage
localStorage.removeItem('usuario');
localStorage.clear();