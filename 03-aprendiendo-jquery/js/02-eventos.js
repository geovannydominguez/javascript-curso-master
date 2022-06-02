// El símbolo '$' significa jQuery
// Selector documento
// Code included inside $( document ).ready() will only run once the page
// Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    // MouseOver y MouseOut
    var caja = $('#caja');
    /*caja.mouseover(function () {
        $(this).css("background", "blanchedalmond");
    });

    caja.mouseout(function () {
        $(this).css("background", "yellowgreen");
    });*/

    // Hover
    // En la funcion hover(), puedo reemplazar las funciones mouseover y mouseout de arriba.
    function over() {
        $(this).css("background", "blanchedalmond");
    }
    function out() {
        $(this).css("background", "yellowgreen");
    }
    caja.hover(over, out);

    //Click, Doble Click
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });

    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "black");
    });

    // focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function () {
        console.log('focus');
        $(this).css("border", "2px solid red");
    });
    nombre.blur(function () {
        console.log('blur');
        $(this).css("border", "1px solid #ccc");
        datos.text($(this).val()).show();
    });

    // Mousedown y Mouseup
    datos.mousedown(function () {
        $(this).css("border-color", "red")
    });
    datos.mouseup(function () {
        $(this).css("border-color", "black")
    });

    // Mousemove
    $(document).mousemove(function () {
        $('#sigueme').css("left", event.clientX)
            .css("top", event.clientY);
    });

});