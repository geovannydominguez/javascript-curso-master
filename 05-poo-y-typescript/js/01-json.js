// Creo una CLASE utilizando un objecto JSON
var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    velocidadMax: '60km',
    cambiarColor: function (nuevo_color) {
        // bicicleta.color = nuevo_color;
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiarColor('Blue');