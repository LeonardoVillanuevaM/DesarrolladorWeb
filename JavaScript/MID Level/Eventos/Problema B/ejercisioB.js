/*
B) Los datos de Cofla y de otros alumnos fueron recibidos y ya están almacenados ahora hay que
crear un sistema que muestre esa información y se pueda asignar cuando rinde.
	Crear soluciones:
	- La interfaz debe ser agradable y atractiva.
	- Debe contener todos los datos de manera estructurada.
	- El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
	- Si el profesor confirma, los datos se deben actualizar y remplazar el espacio de selección
	de semana por la semana seleccionada.
*/
const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

let alumnos = [
{
	nombre: "Leonardo Villanueva",
	email: "Leonardo@gmail.com",
	materia : "Fisica 1"
},
{
	nombre: "Erika Pineda",
	email: "Erika@gmail.com",
	materia : "Fisica 2"
},
{
	nombre: "Zaide Choreño",
	email: "Zaide@gmail.com",
	materia : "Calculo 1"
},
{
	nombre: "Pedro Herrera",
	email: "Pedro@gmail.com",
	materia : "Calculo 2"
},
{
	nombre: "Susana Medina",
	email: "Susana@gmail.com",
	materia : "Algebra 1"
}];

for(alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"];
	let htmlCode = `<div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
			<select class="semana-elegida">
				<option value="Semana 1">Semana 1</option>
				<option value="Semana 2">Semana 2</option>
			</select>
		</div>`;
	contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click",(e)=>{
	let confirmar = confirm("¿Realmente quieres confirmar?");
	if(confirmar){
		document.body.removeChild(boton);
		let elementos = document.querySelectorAll(".semana");
		let semanaElegida = document.querySelectorAll(".semana-elegida");
		for(elemento in elementos){
			semana = elementos[elemento];
			semana.innerHTML = semanaElegida[elemento].value;
		}
	}
});