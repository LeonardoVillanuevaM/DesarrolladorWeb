/*
A) Cofla reprobo 2 materias y ahora tiene que enviar un formulario para registrarse en la misma materia que debe.
	Crear soluciones:
	- El formulario debe contener nombre completo, email y materia adeudada.
	- Se debe validar que el email sea valido, que los nombres sean reales.
	- Se debe enviar al servidor de manera pulida.
*/

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
let resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
	e.preventDefault();
	error = validarCampos();
	if(error[0]){
		resultado.innerHTML = error[1];
		resultado.classList.add("red");
	}else{
		resultado.innerHTML = error[1];
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}
});

const validarCampos =  ()=>{
	let error = [];
	if(nombre.value.length < 5 || nombre.value.length > 40){
		error[0] = true;
		error[1] = "El nombre esta incorrecto";
		return error;
	}else if(email.value.length < 5 ||
	 		email.value.length > 40 || 
	 		email.value.includes('@') == false ||
	 		email.value.includes('.com') == false){
		error[0] = true;
		error[1] = "El email esta incorrecto";
		return error;
	}else if(materia.value.length < 5 || materia.value.length > 40){
		error[0] = true;
		error[1] = "La materia esta incorrecto";
		return error;
	}
	error[0] = false;
	error[1] = `Solicitud enviada correctamente <br>
	Nombre: ${nombre.value}<br>
	Email: ${email.value}<br>
	Materia: ${materia.value}<br>`;
	return error;
}
