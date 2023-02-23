/*
B) Cofla llega a su casa y abre una página y apreta F11, desde ahí se pone a navegar pero hay un problema... como ahora está en la pantalla completa
no puede ver ni la barra de marcadores, ni el protocolo, ni la URL, ni ninguna información que nos puede otorgar la interfaz que contiene la barra de busqueda.
	Crear Soluciones:
	- Crear un sistema que muestre los suficientes datos como para conocer el sitio web
*/

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Href: <b>${href}</b><br>`;

document.write(html);