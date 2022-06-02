interface CocheBase {
    getModelo(): string;
    getVelocidad(): number;
}

class Coche implements CocheBase {

    // propiedades
    public color: string;
    public modelo: string;
    public velocidad: number;

    // getters
    public getModelo() {
        return this.modelo;
    }
    public getColor() {
        return this.color;
    }
    public getVelocidad() {
        return this.velocidad;
    }

    // setters
    public setColor(color: string) {
        this.color = color;
    }
    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    // Constructor
    constructor(modelo = null) {
        this.color = 'white';

        if (modelo == null) this.modelo = 'BMW Genérico';
        else this.modelo = modelo;

        this.velocidad = 0;
    }

    // Métodos
    public acelerar() {
        this.velocidad++;
    }

    public frenar() {
        this.velocidad--;
    }
}

var coche = new Coche('FORD');
coche.setColor('red');
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log(coche);
console.log(coche.getVelocidad());

coche.setModelo('Hyundai');
coche.frenar();
console.log(coche);
