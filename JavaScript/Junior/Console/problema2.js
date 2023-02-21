 /*
B) Cofla está sufriendo un poco ya que, apesar de que cree contar con el %90 de asistencias
y tener un promedio mayor a 7/10, no cree entregar el 75% de trabajos practicos entregados ya
que necesita dividir las tareas que hará semanalmente, Cofla debe trabajar 8 horas por dia
durante 2 semanas entre las cuales tiene que:
- 24 horas para hacer trabajos practicos, 56 horas de trabajar 8 horas de hacer las cosas de la casa
	Crear Soluciones:
	- Organizar las actividades diariamente.
	- Utilizar la consola para organizar todo.
	- El tiempo por tarea no debe superar las 4 horas
 */

let trabajo ="240 minutos de trabajo";
let estudio = "100 minutos de  estudio";
let trabajosPracticos = "100 minutos de tareas";
let trabajosCasa = "30 minutos de quehacer";
let descanso =  "10 minutos de descanso"; 

console.log("TAREAS");
console.group("Semana 1");
for(i=1; i<=14;i++){
	console.groupCollapsed("Dia " + i);
	console.log(trabajo);
	console.log(descanso);
	console.log(estudio);
	console.log(trabajosPracticos);
	console.log(trabajosCasa);
	console.groupEnd();
	if(i==7){
		console.groupEnd();
		console.groupCollapsed("Semana 2");
	}
}
console.groupEnd();

