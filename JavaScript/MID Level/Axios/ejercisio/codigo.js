/*
Cofla ya esta cursando su último semestre en la universidad. Efectivamente tuvo todo lo necesario para 
pasar de año, pero el tiene una duda, quiere saber cuantas personas que cursan el último semestre, se 
reciben y cuantas no, esta información la tiene su universidad a la que el tiene fácil acceso
	Crea Soluciones:
	- Crear un minisistema para obtener esta información
	- Mostrarla ordenamente en un sitio web
*/
const getInfo = async ()=>{
	let aprobados = document.querySelector(".num-aprobados");
	let reprobados = document.querySelector(".num-reprobados")
	try{
		resultado = await axios("informacion.txt");
		aprobados.innerHTML= resultado.data.aprobados;
		reprobados.innerHTML= resultado.data.reprobados;
	}catch(e){
		aprobados.innerHTML= "La API fallo";
		reprobados.innerHTML= "La API fallo";
	}	
}

document.getElementById("getInfo").addEventListener("click",getInfo);
