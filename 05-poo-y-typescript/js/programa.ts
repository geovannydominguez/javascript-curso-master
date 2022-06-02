// Modulos
module Tienda {
    export class Ropa {
        constructor(public titulo: string) {
            console.log(this.titulo);
        }
    }

    export class Informatica {
        constructor(public titulo: string) {
            console.log('Tienda de Tecnología ' + this.titulo);
        }
    }
}

import Informatica = Tienda.Informatica;
var cargar_informatica = new Informatica('SueperTienda');

function arranque(lanzar: string) {

    return function (target: Function) {
        target.prototype.lanzamiento = function (): void {
            alert(lanzar);
        }
    }
}

@arranque("Lanzamiento del decorador curso JS y TypeScript")
class Programa {
    public nombre: string;
    public version: number;

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getVersion() {
        return this.version;
    }
    setVersion(version: number) {
        this.version = version;
    }
}

class EditorVideo extends Programa {
    public timeline: number;

    setTimeline(timeline: number) {
        this.timeline = timeline;
    }
    getTimeline() {
        return this.timeline;
    }

    getAllData() {
        return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeline();
    }
}

// Logica del formulario
var programas: Programa[] = [];

function guardar() {
    var nombre = (<HTMLInputElement>document.getElementById('nombre')).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(2);

    programas.push(programa);

    var list = "";
    for (let prog of programas) {
        list = list + "<li>" + prog.getNombre() + "</li>";
    }

    var listado = <HTMLInputElement>document.getElementById('listado');
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById('nombre')).value = '';
}


// Usando el decorador
var programa = new Programa();
programa.lanzamiento();
//console.log(programa);


