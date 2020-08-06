// Event loop

// Va al Stack
console.log('Primero');

// Va a la sección Queue
setTimeout(() => console.log('Segundo'), 0)

// Va al Stack
console.log('Tercero');

// Va a la sección Queue
setTimeout(() => console.log('Cuarto'), 0)

// Va al Stack
console.log('Quinto');

// Se ejecuta despues del Stack y antes de Queue
new Promise((res, rej) => {
    res('Una promesa')
}).then(console.log)