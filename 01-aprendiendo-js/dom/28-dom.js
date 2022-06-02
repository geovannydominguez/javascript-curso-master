'use strict'

// DOM Document Object Model

// 1. seleccionar un elemento del DOM
console.log('\n document.getElementById');
var caja = document.getElementById('miCaja1');
console.log(caja);
console.log(caja.innerHTML);

caja.innerHTML = "Estoy modificando mi caja div HTML desde JS";
console.log(caja.innerHTML);

caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "white";

function backgroundColor(color) {
    caja.style.background = color;
}

// 2. Otra forma de seleccionar un elemento del DOM
console.log('\n document.querySelector');
// con # para seleccionar un elemento según el id 
// con . para seleccionar un elemento según la class
// sin nada para seleccionar un elemento según el nombre de la etiqueta
var caja2 = document.querySelector("#miCaja2");
console.log(caja2);


// Seleccionar elementos por su etiqueta
console.log('\n document.getElementsByTagName');
var todosDivs = document.getElementsByTagName('div');
console.log(todosDivs);

var seccion = document.querySelector("#miSeccion");

for (let valor of todosDivs) {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(valor.innerHTML);
    parrafo.append(texto);
    seccion.append(parrafo);    
}

// Seleccionar elementos por su class
var divRojos = document.getElementsByClassName('rojo');
console.log(divRojos);



// querySelector: Solo obtiene UN elemento, no un array
var divAmarillo = document.querySelector(".amarillo");
console.log(divAmarillo);

var elemento = document.querySelector("div");
console.log(elemento);

// querySelectorAll obtiene array de elementos en caso de existir
var divAmarillos = document.querySelectorAll(".amarillo");
console.log(divAmarillos);
