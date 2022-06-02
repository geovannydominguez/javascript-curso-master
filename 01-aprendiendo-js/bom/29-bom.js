'use strict'

// BOM Browser Object Model - El Navegador
console.log('\n ------------ BOM --------------');

function getBom() {
    console.log('Alto de ventana: ' + window.innerHeight);
    console.log('Ancho de ventana: ' + window.innerWidth);

    console.log('\n');

    console.log('Alto de screen: ' + screen.height);
    console.log('Ancho de screen: ' + screen.width);

}

function redirect(url) {
    console.log('\n');
    console.log(window.location);
    console.log(window.location.href);
    window.location.href = url;
}

function abrirVentana(url) {
    window.open(url,"");
}
