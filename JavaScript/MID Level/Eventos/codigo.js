const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");
const contenedor3 = document.querySelector(".contenedor-3");
// button.onclick = ()=>{
// 	alert('Hola');
// };

// button.addEventListener("click",saludar);
// function saludar(){
// 	alert("Hola");
// }

contenedor1.addEventListener("dblclick",(event)=>{
	alert('Saludar desde el contenedor rojo con dblclick');
	event.stopPropagation();
});

contenedor2.addEventListener("click",(event)=>{
	alert('Saludar desde el contenedor naranja con click');
	event.stopPropagation();
});

contenedor3.addEventListener(" click",(event)=>{
	alert('Saludar desde el contenedor azul con click');
	event.stopPropagation();
});

button.addEventListener("click",(event)=>{
	alert('Saludar desde el button');
	event.stopPropagation();
});



// function saludar(event){
// 	alert('Saludar desde el button');
// 	//Propiedades del evento
// 	//document.write("Evento: " + event.target);
// 	//console.log(event.target);
// 	//Borrar el evento
// 	//button.removeEventListener("click",saludar);
// }
