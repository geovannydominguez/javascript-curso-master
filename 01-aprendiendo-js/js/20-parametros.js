'use strict'

// Parámetros REST y SPREAD

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
    console.log(firstName);
    console.log(lastName);
    console.log(otherInfo);
}

myBio('Geovanny', 'Dominguez', 'BAUSTRO', 'Developer', 'Male');


function myBio2(firstName, lastName, company) {
    return `${firstName} ${lastName} works at ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
console.log(myBio2(...['Geovanny', 'Dominguez', 'BAUSTRO']));
