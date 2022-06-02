'use strict'
// El símbolo '$' significa jQuery
// Selector documento
//
// Code included inside $( document ).ready() will only run once the page
// Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    // seleccionar elementos html con la class='elemento'.
    // draggable() para mover los elementos dentro de la página.
    $('.elemento').draggable();

    // Redimensionar
    $('.elemento').resizable();

    // Lista cuyos elementos sean Seleccionables
    //$('.lista-seleccionable').selectable();

    // Ordenar elementos
    //$('.lista-seleccionable').sortable();

    // Ordenar elementos
    // Se pueden agregar funciones
    $('.lista-seleccionable').sortable({
        update: function (event, ui) {
            console.log("La lista ha cambiado");
        }
    });

    // Drag and Drod
    $('#elemento-movido').draggable();
    //$('#area').droppable();
    //
    // Se pueden agregar funciones
    $('#area').droppable({
        drop: function () {
            console.log('Ha soltado algo dentro del área');
        }
    });

    // Efectos
    $('#mostrar').click(function () {

        // $(".caja-efectos").effect('explode');
        // $(".caja-efectos").toggle('fadeIn');
        // $(".caja-efectos").toggle('explode');
        // $(".caja-efectos").toggle('blind');
        // $(".caja-efectos").toggle('slide');
        // $(".caja-efectos").toggle('drop');
        // $(".caja-efectos").toggle('fold');
        // $(".caja-efectos").toggle('puff');
        // $(".caja-efectos").toggle('scale');

        // Puedo pasar opciones
        $(".caja-efectos").toggle('shake', 4000);
        
    });

    // Tooltip
    // tooltips para toda la página
    $(document).tooltip();

    // Diálogo
    $('#mostrar-popup').click(function () {
        $('#popup').dialog();
    });

    // Datepicker
    $('#calendario').datepicker();

    // Tabs
    $('#pestanas').tabs();

});