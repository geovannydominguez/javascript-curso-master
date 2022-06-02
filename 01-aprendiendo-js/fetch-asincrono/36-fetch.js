'use strict'

// Fetch (un método sustituto de las peticiones asíncronas ajax) y peticiones a servicios / API REST

var div_usuarios = document.querySelector("#usuarios");
var div_usuario = document.querySelector("#usuario");

// 1. La función fetch retorna una promesa
// 2. Con 'then' se resuelve o rechaza la promesa
// 3. Los 'then' se ejecutan en orden. Esperando el resultado de la promesa o del 'then' anterior.

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function (data) {
//         return data.json();
//     }) // función callback que recibe un parámetro 'data' y luego lo convierte y retorna un json.
//     .then(function (data) {
//         usuarios = data;
//         console.log(usuarios);
//     }) // otra función callback que recibe el resultado del 'then' anterior. Se reasigna el resultado JSON a nuestra variable.
//     ;

// La misma función de arriba, pero con funciones flecha.
getUsuarios()
    .then(data => data.json()) // función callback que recibe un parámetro 'data' y luego lo convierte y retorna un json.
    .then(users => {
        listadoUsuarios(users);

        return getInfo(); // Esta función retorna otra 'promesa' y por tanto
        // puedo continuar ejecutando 'then' a continuación

    }) // otra función callback que recibe el resultado (users) del 'then' anterior. Se reasigna el resultado JSON a nuestra variable.

    //El siguiente 'then' corresponden al return getInfo()
    .then(data => {
        console.log(data)

        return getUsuario(); // Esta función nuevamente retorna otra 'promesa' y por tanto
        // puedo continuar ejecutando 'then' a continuación
    })

    //Los siguientes 'then' corresponden al return getUsuario()
    .then(data => data.json())
    .then(user => {
        listaUsuario(user);
    })

    .catch(error => {
        console.log(error);
    }) // catch para capturar el error en las promesas
    ;


function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUsuario() {
    return fetch('https://jsonplaceholder.typicode.com/users/1');
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = user.id + ' ' + user.name;
        div_usuarios.append(nombre);
    });

    document.querySelector(".cargando").style.display = "none";
}

function listaUsuario(user) {

    let nombre = document.createElement('h4');
    nombre.innerHTML = user.id + ' ' + user.name;
    div_usuario.append(nombre);

    document.querySelector(".usuario").style.display = "none";
}

// Crear mi Promesa
function getInfo() {
    var empleado = {
        nombre: 'Geovanny',
        apellido: 'Dominguez',
        email: 'test1@gmail.com'
    };

    return new Promise((resolve, reject) => {
        var empleado_string = JSON.stringify(empleado);
        if (typeof empleado_string != 'string') return reject("error");
        return resolve(empleado_string);
    });
}