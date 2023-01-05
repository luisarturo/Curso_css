const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log('El producto ${nombre} tiene un precio de: ${precio}');
    }
}

producto.mostrarInfo();


const gifts = ["cat", "game", "socks"];
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    for (let index = 0; index < gifts.length; index++) {
        const element = gifts[index];
        
    }
    return []
}