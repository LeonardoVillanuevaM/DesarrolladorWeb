/*
Despues de aprobar, Cofla se compra una mejor computadora para poder programar mejor y hacer todo de una forma mas óptima pero necesita una resolución óptima
para poder trabajarla.
	Crear Soluciones:
	- Debe ser al menos full hd.
	- Cuando le este por comprar, preguntarle si está seguro de esto.
*/

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es de: ${alto}\n El ancho es de: ${ancho}`);

if (comprar){
	alert('Compra Realizada Exitosamente.');
}else{
	alert('Compra Cancelada.')
}