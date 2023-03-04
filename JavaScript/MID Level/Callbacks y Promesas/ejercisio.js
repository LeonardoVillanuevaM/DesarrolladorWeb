/*
Cofla esta en su último año y necesita recuperar todas sus notas para que le puedan decir si efectivamente pasó al último semestre, de ser asi... 
Cofla ya estaría a un solo paso de finalizar su carrera como ingeniero! pero hay un problema: estas notas estan almacedas en  otro servidor
	Crear Soluciones: 
	- Crear un sistema que almacene toda la información de las materias y las muestre en pantalla.
*/

const materiasHTML = document.querySelector(".materias")

const materias = [
	{
		nombre: "Fisica 4",
		nota: 7		
	},
	{
		nombre: "Calculo 3",
		nota: 8		
	},
	{
		nombre: "Base de datos 3",
		nota: 9		
	},
	{
		nombre: "Matematicas Discretas 2",
		nota: 7		
	},
	{
		nombre: "Programación 4",
		nota: 8		
	}

];

const obtenerMaterias = (id) =>{
	return new Promise((resolve,reject)=>{
		materia = materias[id];
		if(materia == undefined){
			reject("La materias no existe");
		}else{
			setTimeout(()=>{
				resolve(materia)
			},1000 + Math.random()*4000);
		}
	});
}

const devolverMaterias = async ()=>{
	let materia = [];
	for (var i = 0 ; i < materias.length; i++){
		materia[i] = await obtenerMaterias(i);
		console.log(materia[i]);
		let newHTMLCode = `
		<div class="materia">
				<div class="nombre">${materia[i].nombre}</div>
				<div class="nota">${materia[i].nota}</div>
		</div>`;
		materiasHTML.innerHTML += newHTMLCode;
	}
}

devolverMaterias();