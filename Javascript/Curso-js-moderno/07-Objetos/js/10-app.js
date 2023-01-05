const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medida = {
    peso:'1kg',
    medida:'1m'
}


console.log(producto);
console.log(medida);

const resultado = Object.assign(producto, medida);
const resultado2 = {...producto, ...medida}

console.log(resultado);
console.log(resultado2);