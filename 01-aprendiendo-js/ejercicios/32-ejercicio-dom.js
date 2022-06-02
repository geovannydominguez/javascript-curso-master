'use strict'

// Dentro del Evento load 
window.addEventListener('load', function () {

    // seleccionar mi formulario
    var formulario = document.querySelector('#miFormulario');

    // seleccionar div para mostrar datos ingresados
    var div_dashed = document.querySelector('.dashed');
    div_dashed.style.display = "none";

    // Agregar evento submit al formulario
    formulario.addEventListener('submit', function () {
        console.log('Evento submit formulario capturado');

        
        var nombre = document.querySelector("#nombre").value;
        console.log('Nombre: ' + nombre);

        // Validaciones
        if (nombre.trim() == null || nombre.trim().length == 0) {
            document.querySelector("#error_nombre").innerHTML = 'Nombre es obligatorio';
            document.querySelector("#error_nombre").style.color = "red"
            document.querySelector("#error_nombre").style.display = "block"
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none"
        }

        var apellidos = document.querySelector("#apellidos").value;
        console.log('Apellidos: ' + apellidos);

        var edad = document.querySelector("#edad").value;
        console.log('Edad: ' + edad);

        div_dashed.style.display = "block";

        var datos_usuario = [nombre, apellidos, edad];
        for (let dato of datos_usuario) {
            var parrafo = document.createElement('p');
            parrafo.append(dato);
            div_dashed.append(parrafo);
        }

    });

});