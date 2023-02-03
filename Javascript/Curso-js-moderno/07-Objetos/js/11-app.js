const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log('El producto ${nombre} tiene un precio de: ${precio}');
    }
}

producto.mostrarInfo();
