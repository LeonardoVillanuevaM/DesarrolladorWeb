const temporizador = setTimeout(()=>{
	alert('Hola a los 5 segundos')
},5000); 

//No se va a ejecutar
clearTimeout(temporizador);
  
let numero = prompt("¿Cuantos te amos quieres?")  
arreglo = ['Princesa','Hermosa','Bebe','Esposa','Novia','Preciosa','Reyna','Amor de mi vida','Guapa','Faquita'];  
const intervalo = setInterval(()=>{
	numeroAleatorio = Math.trunc(Math.random() * 10)
	document.write(`❤️ Te amooooo mucho ${arreglo[numeroAleatorio]} ❤️ `);
},500);

numero*= 500;

setTimeout(()=>{
	clearInterval(intervalo);
},numero);