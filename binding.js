// New Binding

function Automovil(modelo, color) {
    this.modelo = modelo
    this.color = color
}

const auto = new Automovil('BMW', 'Negro')
console.log(auto);

// ++++++++++++++++++++++++++++++++++++++++++++++++

// Window Binding

function obtenerAuto() {
    console.log(`Mi auto es color ${this.color}`);
}

const color = 'Negro'
window.color = 'Blanco'

obtenerAuto()

// ++++++++++++++++++++++++++++++++++++++++++++++++

// This con implicit binding

const usuario = {
    nombre: 'Mad',
    edad: 20,
    presentacion() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota: {
        nombre: 'Manchas',
        edad: 10,
        presentacion() {
            console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }
}

usuario.mascota.presentacion()

// ++++++++++++++++++++++++++++++++++++++++++++++++

// This con explicit binding 

function persona(el1, el2) {
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y el ${el2}`);
}

// El contexto, es decir "This"
const informacion = {
    nombre: 'Mad',
    edad: 20
}

generosMusicales = ['Rock', 'Hip hop']

// Explicit Binding con call, cuando pasas arreglo debes colocar cada elemento con sus posiciones
persona.call(informacion, generosMusicales[0], generosMusicales[1])

// Explicit Binding con apply, el cual si acepta arreglo
persona.apply(informacion, generosMusicales)

// Explicit Binding con bind, el cual asigna la función en una nueva variable
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1])
nuevaFn()