//Abrir ventana emergente
let youtubeUrl = 'https://www.youtube.com/';
//Cerrar ventana emergente
// ventana.close();
//Saber si ventana esta abierta o cerrada
let respuesta = confirm("¿Estas seguro que deseas salir del sitio web?");
console.log(respuesta);
if(respuesta == false){
	document.write("Ventana Cerrada: " + window.closed);
}else{
	window.close();
}


document.write("<b3><br>availHeight Screen: " + screen.availHeight);
document.write("<br>availLeft Screen: " + screen.availLeft);
document.write("<br>availTop Screen: " + screen.availTop);
document.write("<br>availWidth Screen: " + screen.availWidth);
document.write("<br>colorDepth Screen: " + screen.colorDepth);
document.write("<br>width Screen: " + screen.width);
document.write("<br>height Screen: " + screen.height);
document.write("<br>Screen left : " + screenLeft);
document.write("<br>Screen Top : " + screenTop);

document.write("<br><br>URL:<br>https://www.youtube.com/watch?v=ppKlvMlqYrM<br>")
 document.write("<br>href: https://www.youtube.com/watch?v=ppKlvMlqYrM");
 document.write("<br>hostname: http://www.youtube.com");
 document.write("<br>pathname: /watch");
 document.write("<br>protocolo: https:");

