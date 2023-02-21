/*
B) Cofla vuelve de la comisaría exausto y por lo cansado que estaba se fue a dormir...
Al otro día comienzan las clases del ciclo básico de la universidad, en su curso son 19 alumnos, pero surgió un problema que lo complicó un poco a la facultad:
se rómpio el sistema de registro de asistencias y durante los próximos 30 días no se pódran hacer registros de datos
de ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.
		- Crear mini-sistema que haga en aleatorio los alumnos que estan presentes (P) y ausentes (A) en clase.
		- Pasados los 30 dias mostrar la situación final de todos los alumnos (Num total de presentes y ausentes en clase.)
		- Se puede tener un maximo de 50% de asistencias por semestre, si se tienen menos aclarar que esta reprobado.
*/
var cantidadAlumnos = Number(prompt("Cuántos alumnos son?"));
var alumnosTotales = [];

for (var i = 0; i < cantidadAlumnos; i++) {
	nameAlumno = prompt("Alumno "+ i + "\nNombre del Alumno: ");
	numAsistencias = 0;
	alumnosTotales[i] = [nameAlumno,numAsistencias];
}

const tomarAsistencia = (name,num)=>{

	let presencia = getRandomInt(2);
		if (presencia == 0) {
			alumnosTotales[num][1]++;
		}
}

const getRandomInt = (max)=>{
	return Math.floor(Math.random() * max);
}

for(i=0; i<30; i++){
	for (alumno in alumnosTotales){
		tomarAsistencia(alumnosTotales[alumno][0],alumno);

	}
}

for(alumno in alumnosTotales){
	let resultado = `<b>${alumnosTotales[alumno][0]}:</b><br>
	Presentes: ${alumnosTotales[alumno][1]}<br>
	Ausentes: ${30 - alumnosTotales[alumno][1]}<br>`;
	promedio = (alumnosTotales[alumno][1] * 100) / 30;

	if(promedio < 50){
		resultado+= "<b style='color:red'>REPROBADO</b> por inasistencias<br>"
	}else{
		resultado+= "<b style='color:green'>APROBADO</b><br>"
	}
	document.write(resultado);
	document.write("Porcentaje de Asistencias: "+promedio+ "%<br><br>");

}

