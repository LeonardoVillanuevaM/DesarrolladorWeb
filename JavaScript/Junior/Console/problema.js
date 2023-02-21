 /*
A) Termino el primer semestre y cofla no sabe si aprobara o no las materias, para lograrlo necesitara:
Contar con al menos el 90% de asistencias.
El promedio por materia debe ser al menos 7/10
Debe tener al menos del 75% de los trabajos practicos entregados.
	Crear Soluciones:
	- Solicitar los datos y decirle si aprueba o no.
	- Mostrar todo esto con colores representativos en consola
	- Todo esto estructurardo como tabla.
 */

 const materias = {
 	//variable: [asistencia,promedio,nºtrabajos,materia]
 	fisica: [90,6,3,"fisica"],
 	matematicas: [84,8,4,"matematicas"],
 	logica: [92,8,4,"logica"],
 	quimica: [96 ,8,4,"quimica"],
 	calculo: [91,6,3,"calculo"],
 	programacion: [79,7,4,"programacion"],
 	biologia: [75,9,2,"biologia"],
 	db: [98,9,1,"db"],
 	algebra: [100,10,4,"algebra"]
 }

const aprobar =()=>{
	for(materia in materias){
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2];
		let  nameMateria = materias[materia][3];
		console.log(nameMateria);
		if (asistencias >= 90){
			console.log("%cAsistencias completas", "color:green");
		}else{
			console.log("%cAsistencias incompletas", "color:red");
		}

		if (promedio >= 7){
			console.log("%cAlcanza promedio", "color:green");
		}else{
			console.log("%cNo alcanza promedio", "color:red");
		}

		if (trabajos >= 3){
			console.log("%cTrabajos Completos", "color:green");
		}else{
			console.log("%cTrabajos Incompletos", "color:red");
		}
	}
}

aprobar();

   