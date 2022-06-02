// selector documento
// jQuery(document).ready(function () {
//     console.log('estamos listos')
// });


// Code included inside $( document ).ready() will only run once the page
// Document Object Model (DOM) is ready for JavaScript code to execute.

// El símbolo '$' significa jQuery
// Selector documento
$(document).ready(function () {

    //
    //Selector de ID
    //
    var rojo = $("#rojo");
    rojo.css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");


    //
    //Selector de clases
    //
    $(".zebra").css("border", "5px dashed black");

    $(".sin_borde").click(function () {
        $(this).addClass('zebra2');
    });

    //
    //Selector de Etiquedas
    //
    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function () {
        var this_ = $(this);

        if (!this_.hasClass('grande')) {
            $(this).addClass('grande');
        } else {
            $(this).removeClass('grande');
        }
    });


    //
    //Selector de Atributos
    //
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');


    //
    //Selector Otros
    // Seleccionar párrafos y enlaces
    //
    // $('p, a').addClass('margen-superior');

    // Buscar elementos
    var busqueda = $('#caja').find('.resaltado');
    console.log(busqueda);

    // Posicionarse con Parent
    // La siguiente búsqueda no encuentra nada
    var li = $('#elemento2').find('.resaltado');
    console.log(li); 
    // debo salir hasta el div #caja que en este caso es el componente padre
    var elemento = $('#elemento2').parent().parent().find('.resaltado');
    console.log(elemento); 

});