const producto = 'Monitor de 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = ' en promocion'.repeat(3); // Si a repeat le mandas un numero no entero redondea el valor

console.log(texto);
console.log(`${producto} ${texto} !!!`)


// split, dividir un string
const actividad = "Estoy aprendiendo Javascript Moderno";

console.log(actividad.split(" "));

const hobbies = ' Leer, caminar, escuchar música, escribir, aprender programacion';
console.log(hobbies.split(","));

const tweet = "Aprendiendo Javascript #JSModernoConJuan";
console.log(tweet.split('#'))
