'use strict'

// Funciones anónimas 
// Es una función que no tienen nombre

var movie = function (name) {
    return `Movie's name: ${movie}`;
}

// Callback Function
// A JavaScript callback is a function which is to be executed after another function 
// has finished execution. 
// A more formal definition would be - Any function that is passed as an argument to another 
// function so that it can be executed in that other function is called as a callback function.

function add(num1, num2, showAdd, byTwoAdd) {
    var res = num1 + num2;
    showAdd(res);
    byTwoAdd(res);
    return res;
}


// Callback function: any function that is passed as an argument to another function
console.log('\nFunciones Callback');
add(12, 3, function (result) {
    console.log(`The sum is: ${result}`);
}, function (result) {
    console.log(`The sum by 2 is: ${result*2}`);
});


// funciones flecha.
// Son funciones callback definidos de una manera mas limpia y compacta.
//
// La función de arriba, definida con funciones flecha:
// Puede ser el nombre del argumento con o sin paréntesis.
console.log('\nFunciones Flecha');
add(15, 5, (result) => {
    console.log(`The sum is: ${result}`);
}, result => {
    console.log(`The sum by 2 is: ${result*2}`);
});
