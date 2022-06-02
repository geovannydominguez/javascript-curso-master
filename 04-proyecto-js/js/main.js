$(document).ready(function () {

    // Solo para la página index.html
    if (window.location.href.indexOf('index') > -1) {

        // Para Slider Image gallery with captions
        $('.mySlider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });

        // Posts
        var posts = [
            {
                title: 'Prueba de título 1',
                date: moment().format('DD MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sem quis est pretium volutpat. Suspendisse potenti. Cras sodales, massa luctus blandit pretium, erat turpis lacinia erat, in laoreet diam mauris eget elit. Aenean leo nibh, eleifend vel urna at, pulvinar imperdiet orci. Pellentesque pretium dolor at arcu auctor, sit amet semper odio consectetur. Sed tincidunt nisl eget metus hendrerit tristique. Pellentesque varius, sem ac lacinia volutpat, odio erat luctus tortor, ac mattis ligula sapien ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                title: 'Prueba de título 2',
                date: moment().format('DD MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sem quis est pretium volutpat. Suspendisse potenti. Cras sodales, massa luctus blandit pretium, erat turpis lacinia erat, in laoreet diam mauris eget elit. Aenean leo nibh, eleifend vel urna at, pulvinar imperdiet orci. Pellentesque pretium dolor at arcu auctor, sit amet semper odio consectetur. Sed tincidunt nisl eget metus hendrerit tristique. Pellentesque varius, sem ac lacinia volutpat, odio erat luctus tortor, ac mattis ligula sapien ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                title: 'Prueba de título 3',
                date: moment().format('DD MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sem quis est pretium volutpat. Suspendisse potenti. Cras sodales, massa luctus blandit pretium, erat turpis lacinia erat, in laoreet diam mauris eget elit. Aenean leo nibh, eleifend vel urna at, pulvinar imperdiet orci. Pellentesque pretium dolor at arcu auctor, sit amet semper odio consectetur. Sed tincidunt nisl eget metus hendrerit tristique. Pellentesque varius, sem ac lacinia volutpat, odio erat luctus tortor, ac mattis ligula sapien ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                title: 'Prueba de título 4',
                date: moment().format('DD MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sem quis est pretium volutpat. Suspendisse potenti. Cras sodales, massa luctus blandit pretium, erat turpis lacinia erat, in laoreet diam mauris eget elit. Aenean leo nibh, eleifend vel urna at, pulvinar imperdiet orci. Pellentesque pretium dolor at arcu auctor, sit amet semper odio consectetur. Sed tincidunt nisl eget metus hendrerit tristique. Pellentesque varius, sem ac lacinia volutpat, odio erat luctus tortor, ac mattis ligula sapien ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                title: 'Prueba de título 5',
                date: moment().format('DD MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sem quis est pretium volutpat. Suspendisse potenti. Cras sodales, massa luctus blandit pretium, erat turpis lacinia erat, in laoreet diam mauris eget elit. Aenean leo nibh, eleifend vel urna at, pulvinar imperdiet orci. Pellentesque pretium dolor at arcu auctor, sit amet semper odio consectetur. Sed tincidunt nisl eget metus hendrerit tristique. Pellentesque varius, sem ac lacinia volutpat, odio erat luctus tortor, ac mattis ligula sapien ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            },
            {
                title: 'Prueba de título 6',
                date: moment().format('DD MMMM YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sem quis est pretium volutpat. Suspendisse potenti. Cras sodales, massa luctus blandit pretium, erat turpis lacinia erat, in laoreet diam mauris eget elit. Aenean leo nibh, eleifend vel urna at, pulvinar imperdiet orci. Pellentesque pretium dolor at arcu auctor, sit amet semper odio consectetur. Sed tincidunt nisl eget metus hendrerit tristique. Pellentesque varius, sem ac lacinia volutpat, odio erat luctus tortor, ac mattis ligula sapien ac augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span>${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;

            $('#posts').append(post);
        });

    }


    // Selector de Tema
    var theme = $('#myTheme');

    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });

    // Scroll arriba de la web
    $('.subir').click(function (e) {

        // Para que el link no haga su función de llevarnos a otro sitio
        e.preventDefault();

        // elementos html y body de la página
        $('html, body').animate({
            scrollTop: 0
        }, 500)

        // Para que el link no haga su función de llevarnos a otro sitio
        return false;
    });

    // Login falso
    // seleccionad el id '#login' y el elemento html 'form'
    $('#login form').submit(function () {
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    // Mostrar datos de usuario logeado en caso de existir
    var form_name = localStorage.getItem('form_name');

    if (form_name != null || form_name != undefined) {
        var about_parrafo = $('#about p');

        about_parrafo.html("<br> <strong> Bienvenido " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        // Ocultar login
        $("#login").hide();

        $('#logout').click(function () {
            localStorage.clear();

            location.reload();
        });

    }

    // Solo para la página about.html
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // Solo para la página reloj.html
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);

    }


    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        // Validación Formulario
        $.validate({
            lang: 'es',
            modules : 'date, security',
        });
    }
    


});