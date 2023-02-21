/*
Cofla ya vió las 12 materias y se decidió en cual se va a inscribir asi que en 3 dias lo hará, el problema es que se rompió el sistema de inscripciones
	Crear soluciones:
	- Si ya hay 20 alumnos anotados en la materia negarle la inscripcion
	- Si hay menos de 20 alumnos inscribir a cofla y añadirlo a la lista de alumnos
*/
let materias = {
		fisica : ["Perez","pedro","pepito","cofla","maria"],
		programacion : ["Dalto","pedro","juan","pepito"],
		logica : ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica : ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	if(personas.length >= 20){
		document.write(`Lo siento <b>${alumno}</b>, la clase de <b>${materia}</b> ya esta llena<br>`);
	}else{
		personas.push(alumno);
		switch (materia) {
			case 'fisica':
				materias = {
					fisica : personas,
					programacion : materias['programacion'],
					logica : materias['logica'],
					quimica : materias['quimica']				
				}
			break;
			case 'programacion':
				materias = {
					fisica : materias['fisica'],
					programacion : personas,
					logica : materias['logica'],
					quimica : materias['quimica']				
				}
			break;
			case 'logica':
				materias = {
					fisica : materias['fisica'],
					programacion : materias['programacion'],
					logica : personas,
					quimica : materias['quimica']			
				}			
			break;
			case 'quimica':
				materias = {
					fisica : materias['fisica'],
					programacion : materias['programacion'],
					logica : materias['logica'],
					quimica : personas	
				}			
			break;
			default:
				document.write("<b style=color:red>La Materia no existe</b><br>")
			break;	
		}
		document.write(`<b style=color:blue>Felicidades ${alumno} te has incrito a la materia de ${materia} correctamente</b><br>`)		
	}	
}

document.write(materias["fisica"] + "<br>");
inscribir("1","fisica");
inscribir("2","fisica");
inscribir("23","fisica");
inscribir("24","fisica");
inscribir("25","fisica");
inscribir("26","fisica");
inscribir("27","fisica");
inscribir("28","fisica");
inscribir("29","fisica");
inscribir("210","fisica");
inscribir("211","fisica");
inscribir("212","fisica");
inscribir("213","fisica");
inscribir("214","fisica");
inscribir("215","fisica");
inscribir("216","fisica");
inscribir("2168","fisica");
document.write(materias["fisica"] + "<br>");