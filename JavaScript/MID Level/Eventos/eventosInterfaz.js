const imagen = document.querySelector(".imagen");
const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".contenedor-1")

imagen.addEventListener("error", ()=>{
	alert('Ha sucedido un error');
});

addEventListener("load",()=>{
	console.log('Imagen cargada');
});

addEventListener("resize",()=>{
	console.log('Se esta cambiando el tamaño del sitio');
});

addEventListener("scroll",()=>{
	console.log('Se ha hecho un scroll');
});

input.addEventListener("select",(e)=>{
	console.log(`Se ha empezado  a seleccionar del caracter: ${e.target.selectionStart}\n 
	Se ha terminado del seleccionar del caracter ${e.target.selectionEnd}`);
	let start = e.target.selectionStart;
	let end = e.target.selectionEnd; 
	let textoCompleto = input.value;
	contenedor.innerHTML = textoCompleto.substring(start,end);
});

input.addEventListener("keyup",(e)=>{
	let tecla = e.key;
	nuevoContenido = `\nLa ultima tecla presionada fue: <b>${tecla}</b>`;
	contenedor.innerHTML = nuevoContenido; 
});
