const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown",(event)=>{
	console.log('una tecla fue presionada.');
	event.stopPropagation();
});

input.addEventListener("keypress",(event)=>{
	console.log('un usuario presiono una tecla y la solto');
	event.stopPropagation();
});

input.addEventListener("keyup",(event)=>{
	console.log('una tecla fue soltada');
	event.stopPropagation();
});

