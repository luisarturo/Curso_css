// CONGELAR UN OBJECTO PARA NO PODERLO MODIFICAR

"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal( producto ) // Puedes modificar el valor, pero no puedes Eliminar propiedades o agregar nuevas propiedades


producto.disponible = false;
// producto.imagen = "imagen.png"
// delete producto.precio;

console.log(producto);