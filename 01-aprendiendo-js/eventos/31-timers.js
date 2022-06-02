'use strict'

// Evento Load para cargar el JS después de que todos los elementos del DOM hayan sido cargados.
window.addEventListener('load', function () {
    
    var seconds = 0;
    
    // Timers
    // JavaScript setInterval() executes a function continuously after a certain period of milliseconds have passed.
    var time = this.setInterval(function () {
        
        var size = document.querySelector("h1").style.fontSize;
        if (size == "30px") {
            document.querySelector("h1").style.fontSize = "50px";
        } else {
            document.querySelector("h1").style.fontSize = "30px";
        }

    }, 1000);

    // Timers
    // The JavaScript setTimeout() method executes a function after a period of milliseconds.
    var tiempo2 = setTimeout(function () {
        console.log(seconds++);
    }, 2000);

    var stop = this.document.querySelector('#stop');
    stop.addEventListener('click', function () {
        clearInterval(time);
    });
});