// DESTRUCTURING DE OBJECTOS
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;

console.log(producto.nombre);

// DESTRUCTURING
const { nombre } = producto
console.log(nombre);