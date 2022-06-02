'use strict'

var text = 'Hello world, I am a Global var';
var num = 12;

function helloWorld(text) {
    var newText = 'I am a Local var';
    console.log(text);
    console.log(num);
    console.log(newText);
}

helloWorld(text);

