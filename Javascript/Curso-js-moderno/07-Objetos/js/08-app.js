// CONGELAR UN OBJECTO PARA NO PODERLO MODIFICAR

"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze( producto )


// producto.disponible = false;
// producto.imagen = "imagen.png"
// delete producto.precio;

console.log(producto);

console.log(Object.isFrozen(producto));