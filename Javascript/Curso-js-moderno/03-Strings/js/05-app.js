const producto = 'Monitor de 20 Pulgadas';

console.log(producto)

// .replace para reemplazar
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'))


// .slice para cortar
console.log(producto.slice(0, 10))
console.log(producto.slice(8))
console.log(producto.slice(2, 1)) // Si el primer dato es mayor que el segundo no va hacer nada


console.log(producto.substring(0, 10));
console.log(producto.substring(2,1));// Si el primer dato es mayor que el segundo, modifica la posición y lo acomoda de menor a mayor por ejemplo de 2,1 lo cambia a 1,2

