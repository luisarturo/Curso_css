// AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Agregar nuevas propiedades
producto.imagen = "imagen.png"

// Eliminar propiedad
delete producto.disponible

console.log(producto);