// string
let cadena: string = 'Geovanny Domínguez';

// number
let numero: number = 1234;

// Boolean
let verda_false: boolean = true;

// Any
let cualquiera: any = "hola"
cualquiera = 77

// Arrays
var lenguajes: Array<string> = ["PHP", "C#", "JS"];
let years: number[] = [2010, 2011, 2012, 2013];
let yearsAny: any[] = ["2010", "2011", 2012, 2013];


// Múltiple tipos de datos asignados a una variable
let cadena2: string | number = "esto es una prueba";
cadena2 = 10;

// Crear tipos de datos
type letrasonumeros = string | number;
let cadena3: letrasonumeros = 100;
cadena3 = "esto es otra prueba de tipos de datos";


console.log(cadena, numero, verda_false, cualquiera, lenguajes);
