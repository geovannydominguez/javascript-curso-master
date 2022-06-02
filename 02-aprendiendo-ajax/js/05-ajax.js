// El símbolo '$' significa jQuery
// Selector documento
//
// Code included inside $( document ).ready() will only run once the page
// Document Object Model (DOM) is ready for JavaScript code to execute.
$(document).ready(function () {

    // Peticiiones AJAX - Load
    // $('#datos').load('https://reqres.in/');

    // Métodos GET
    // El primer argumento es la URL
    // El segundo argumento son los parámetros de la URL
    // El tercer argumento es una funcion callback para procesar la respuesta
    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        console.log(response);

        response.data.forEach(element => {
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>")
        });
    });




    // var user = {
    //     name: "geovanny",
    //     job: "developer"
    // };

    // // Métodos POST
    // $.post("https://reqres.in/api/users", user, function (response) {
    //     console.log(response);
    // });

    $("#miFormulario").submit(function (e) {
        //prevenir navegacion del action
        e.preventDefault();

        var user = {
            name: $('input[name="nombre"]').val(),
            job: $('input[name="job"]').val()
        };

        // Métodos POST
        /*$.post($(this).attr("action"), user, function (response) {
            console.log(response);
        }).done(function () {
            alert('REGISTRO CORRECTO')
        });*/

        // Otra forma de realizar peticiones 
        // $.ajax
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: user,
            beforeSend: function () {
                console.log('Enviando usuario ...');
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log('Ha ocurrido un error');
            },
            timeout: 2000
        });

        // prevenir navegación
        return false;
    });

});