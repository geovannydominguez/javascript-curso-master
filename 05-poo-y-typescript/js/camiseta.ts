// Interface
interface CamisetaBase {
    setColor(color: string): void;
    getColor(): string;
}

// Decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log('Camiseta estampada con el logo de: ' + logo);
        }
    }
}


// Clase (molde del objeto)
// La Clase debe llamarse igual que el fichero y utilizar CamelCase.
// Para utilizar esta clase en otro archivo, hay que especificar export.
class Camiseta implements CamisetaBase {

    // Propiedades (características del objeto)
    // Se debe definir la visibilidad de las propiedades con public, private o protected
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Constructor
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    //Métodos (funciones o acciones del objeto)
    public setColor(color: string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }
}


// Clase Hija que utiliza un Decorador
@estampar('Polo')
class Sudadera extends Camiseta {
    private capucha: boolean;

    setCapucha(capucha: boolean): void {
        this.capucha = capucha;
    }

    getCapucha(): boolean {
        return this.capucha;
    }
}

var sudadera = new Sudadera('blue', 'larga', 'nike', 'M', 10);
sudadera.setCapucha(true);
sudadera.setColor('white');
console.log(sudadera);
sudadera.estampacion();

/*
var camiseta = new Camiseta('blue', 'larga', 'nike', 'L', 15);
camiseta.setColor('Blue');

var playera = new Camiseta('red', 'corta', 'adidas', 'L', 20);
//playera.setColor("Red");

console.log(camiseta, playera);
*/