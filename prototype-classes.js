// Classes
class Playlist {
    constructor(nombre) {
        this.nombre = nombre
    }

    play() {
        console.log(`Reproduciendo la playlist ${this.nombre}`);
    }

    eliminar() {
        console.log(`Eliminando playlist ${this.nombre}`);
    }
}

const playlist1 = new Playlist('Rock')
const playlist2 = new Playlist('Punk')

console.log(playlist1);
console.log(playlist2);

playlist1.play()
playlist2.eliminar()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Prototypes

// Crear clase
function Playlist(nombre) {
    this.nombre = nombre
}

// Crear métodos
Playlist.prototype.play = function() {
    console.log(`Reproduciendo la playlist ${this.nombre}`);
}

Playlist.prototype.eliminar = function() {
    console.log(`Eliminando la playlist ${this.nombre}`);
}

function Cancion(nombre, genero) {
    // Herencia de propiedades
    Playlist.call(this, nombre)
    this.genero = genero
}

// Herencia de metodos con prototypes
Cancion.prototype = Object.create(Playlist.prototype)

const playlist1 = new Playlist('Rock')
const playlist2 = new Playlist('Punk')

console.log(playlist1);
console.log(playlist2);

playlist1.play()
playlist2.eliminar()