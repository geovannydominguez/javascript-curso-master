var Coche = /** @class */ (function () {
    // Constructor
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = 'white';
        if (modelo == null)
            this.modelo = 'BMW Genérico';
        else
            this.modelo = modelo;
        this.velocidad = 0;
    }
    // getters
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    // setters
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    // Métodos
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
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
