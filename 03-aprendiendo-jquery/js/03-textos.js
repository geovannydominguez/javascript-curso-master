// El símbolo '$' significa jQuery
// Selector documento
// Code included inside $( document ).ready() will only run once the page
// Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    reloadLinks();

    $('#add_button').removeAttr('disabled')
        .click(function () {
            // Limpia la lista <ul id="menu"> y agrega el siguiente elemento:
            // $('#menu').html('<li><a href="' + $('#add_link').val() + '"></a></li>');

            // Mantiene la lista inicial <ul id="menu"> y Agrega un nuevo elemento antes (fuera) de la lista
            // $('#menu').before('<li><a href="' + $('#add_link').val() + '"></a></li>');

            // Mantiene la lista inicial <ul id="menu"> y Agrega un nuevo elemento al inicio de la lista
            // $('#menu').prepend('<li><a href="' + $('#add_link').val() + '"></a></li>');

            // Mantiene la lista inicial <ul id="menu"> y Agrega un nuevo elemento al final de la lista
            $('#menu').append('<li><a href="' + $('#add_link').val() + '"></a></li>');

            reloadLinks();
        });

});

function reloadLinks() {
    // recorrer todos los elementos enlace <a></a>
    $('a').each(function () {
        var a = $(this);
        var url = a.attr("href");

        // agregar mas atributos
        a.attr('target', 'blank');

        a.text(url);

    });
}