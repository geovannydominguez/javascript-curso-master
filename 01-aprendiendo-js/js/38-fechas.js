'use strict'

var fecha = new Date();
console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();

var textHora = `
    El año es: ${year}
    El año es: ${mes}
    El día es: ${dia}
`;
console.log(textHora);

