const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
const hijos = contenedor.childNodes;
const elementosHijos = contenedor.children;
const parrafo = document.createElement("P")
parrafo.innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");
console.log(h2_antiguo.parentElement);
// contenedor.replaceChild(h2_nuevo,h2_antiguo);
// contenedor.removeChild(h2_antiguo);

// console.log(primerHijo);
// console.log(ultimoHijo);
// console.log(elementosHijos);

// hijos.forEach(hijo => console.log(hijo));

// hijos.forEach(function hijos(hijo){
// 	console.log(hijo);
// });

// for(hijo of elementosHijos){
// 	console.log(hijo);
// }

let respuesta = contenedor.hasChildNodes();

if (respuesta==true) {
	document.write("<br>Contendor contiene hijos");
}else{
	document.write("<br>NO contiene hijos");
}

console.log(contenedor.parentElement);

console.log(h2_antiguo.nextElementSibling);


