'use strict'

// Evento load
window.addEventListener('load', () => {

    // Cargar el JS en el evento load para evitar cargar al final del arhivo HTML. Siempre en el HEAD

    // Eventos del ratón

    function cambiarColor() {
        console.log('Clic');

        var bg = button.style.background;
        if (bg == "blue") {
            button.style.background = "green";
        } else {
            button.style.background = "blue";
        }
    }

    var button = document.getElementById('button1');
    console.log(button);

    // Click
    button.addEventListener('click', function () {
        cambiarColor();

        // 'This' hace referencia al propio elemento al que estoy accediendo dentro del evento
        //console.log(this);
        this.style.border = "dashed";
    });

    // Mouse over
    button.addEventListener('mouseover', function () {
        button.style.background = "#ccc";
    });

    // Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function () {
        console.log('[focus] Estás dentro del input');
    });

    // Blur
    input.addEventListener('blur', function () {
        console.log('[blur] Estás fuera del input');
    });

    // Keydown
    input.addEventListener('keydown', function (event) {
        console.log('[keydown] Pulsando esta tecla', String.fromCharCode(event.keyCode));
    });

    // Keypress
    input.addEventListener('keypress', function (event) {
        console.log('[keypress] Tecla presionada', String.fromCharCode(event.keyCode));
    });

    // Keyup
    input.addEventListener('keyup', function (event) {
        console.log('[keyup] Tecla soltada', String.fromCharCode(event.keyCode));
    });

});



