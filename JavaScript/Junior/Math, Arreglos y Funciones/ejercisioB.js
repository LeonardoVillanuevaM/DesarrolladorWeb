/*
La facultad de Cofla está por comenzar y las 4 materias de la carrera tienen asignado un profesor y todos los alumnos que se
anotaron en dichas clases, pero se necesita ver esto mas ordenado.
	Crear soluciones:
	- Crear una funcion que al pasarle como parametro la materia devuelva:
		* Profesor asignado
		* Nombre de todos los alumnos
	- Crear una funcion que nos diga cuantas clases está Cofla
	- Nombrar las clases en las que está y los profesores de cada una.
*/
const obtenerInformacion = (materia)=>{
	materias = {
		fisica : ["Perez","pedro","pepito","cofla","maria"],
		programacion : ["Dalto","pedro","juan","pepito"],
		logica : ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica : ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}
	if(materias[materia] != undefined){
		return [materias[materia],materia,materias];
	}else{
		return materias;
	}
}

const mostrarInformacion = (nombreMateria)=>{	
	informacion = obtenerInformacion(nombreMateria);
	if(informacion != false){
		let profesor = informacion[0][0];
		alumnos = informacion[0];
		alumnos.shift()
		materia = informacion[1];
		document.write(`Materia: <b style="color:green">${materia}</b><br>
		Profesor: <b style="color:blue">${profesor}</b><br>
		Alumnos: <b style="color:red">${alumnos}</b><br><br>`);	
	}
}

const cantidadMaterias = (alumno)=>{
	let cantidadTotal = 0;
	let clasesPresentes = [];
	let profesoresPresentes = [];
	for(info in informacion[2]){
		if(informacion[2][info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(info);
			profesoresPresentes.push(informacion[2][info].shift());
		}
	}
	return `<b style=color:red>${alumno}</b> esta en <b>${cantidadTotal} clases:</b>
	<br><b style=color:green>${clasesPresentes}</b> con los profesores: </b>
	<br><b style=color:blue>${profesoresPresentes}</b>
	<br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadMaterias("cofla"));
document.write(cantidadMaterias("pedro"));









