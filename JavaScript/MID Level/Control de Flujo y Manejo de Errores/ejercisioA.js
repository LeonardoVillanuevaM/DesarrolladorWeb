/*
A) Las mesas de examen ya finalizaron y el profesor le tomó un último examen especial a
Cofla,ya Cofla hizo 2 pruebas mas, pero lamentablemente se rompió el sistema de inscripciópn
de notas, por ende habrá que crear una solución a este problema, desarrollando una web que
sea capás de simular su funcionamiento.
	Crear soluciones:
	- Crear mini interfaz para introducir notas.
	- Validar que no haya errores.
	- Se debe promediar la nota del profesor, con otras 2 notas de trabajos.
	- Si el promedio es mayor a 7/10 -> Aprobó la materia.
*/

const sendButton = document.getElementById('btn-enviar');
let resultadoPrevio = document.querySelector('.calificacion');
let txtResultado = document.querySelector(".resultado");
let txtMensaje = document.querySelector(".mensaje");
sendButton.addEventListener("click", (e)=>{
	let resultado,mensaje;
	try{
		// let resultadoPrevio = parseInt(resultPrevio);
		resultadoPrevio = parseInt(resultadoPrevio.value);
		console.log(resultadoPrevio);
		if(isNaN(resultadoPrevio)){
			alert("Inserta un numero valido");
			return 0;
		}					
		// let nota1 = prompt("Inserta la calificacion del primer parcial");
		// let nota2 = prompt("Inserta la calificacion del segundo parcial");
		mensaje = definirMensaje(resultadoPrevio);
		resultado = verificarAprobacion(7,7,resultadoPrevio);
	} catch(e){
		resultado = "No insertaste una calificacion valida";
		mensaje = "La calificacion no se pudo guardar";
		console.log(e);
	}
	txtResultado.innerHTML = "Promedio: " + resultado;
	txtMensaje.innerHTML = "Mensaje: " + mensaje;
});



const definirMensaje = (resultadoPrevio) =>{
	let resultado;
	switch (resultadoPrevio){
	case 1:
		resultado = "Sacaste la calificacion mas baja: " + resultadoPrevio;
		alert(resultado);
		break;	
	case 2:
		resultado = "Sacaste una calificacion muy mala: " + resultadoPrevio;
		alert(resultado);
		break;
	case 3:
		resultado = "Sacaste una calificacion mala: " + resultadoPrevio;
		alert(resultado);
		break;
	case 4:
		resultado = "Tienes que mejorar mucho: " + resultadoPrevio;
		alert(resultado);
		break;
	case 5:
		resultado = "Tienes que mejorar: " + resultadoPrevio;
		alert(resultado);
		break;
	case 6:
		resultado = "Estuviste muy cerca de aprobar: " + resultadoPrevio;
		alert(resultado);
		break;
	case 7:
		resultado = "Alcanzaste a aprobar: " + resultadoPrevio;
		alert(resultado);
		break;
	case 8:
		resultado = "Buena calificacion: " + resultadoPrevio;
		alert(resultado);
		break;
	case 9:
		resultado = "Excelente calificacion: " + resultadoPrevio;
		alert(resultado);
		break;
	case 10:
		resultado = "Felicidades sacaste la mejor calificacion: " + resultadoPrevio;
		alert(resultado);
		break;
	default:
		resultado = null;
	}
	txtMensaje.innerHTML = resultado;

	return resultado;
}

const verificarAprobacion = (nota1,nota2,resultadoPrevio)=>{
	promedio = Math.round((nota1 + nota2 + resultadoPrevio) / 3);
	if(promedio >= 7){
		alert(`${nota1} + ${nota2} + ${resultadoPrevio} / 3 = ${promedio}
			\nPromedio: ${promedio}
			\nAprobado`);
				
		return promedio;
	}else{
		alert(`${nota1} + ${nota2} + ${resultadoPrevio} / 3 = ${promedio}
			\nPromedio: ${promedio}
			\nReprobado`);

		return promedio;
	}
}
