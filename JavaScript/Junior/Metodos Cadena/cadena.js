document.write("<h3>concat</h3>");
let cadena = "cadena de prueba";
let cadena2 = " cadena de prueba "
document.write(`let cadena = "cadena de prueba";<br>`);
document.write(`let cadena2 = " cadena de prueba "<br>`);
let resultado = cadena.concat(cadena2);
document.write(`let resultado = cadena.concat(cadena2);<br>`);
document.write("<b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>startsWith</h3>");
document.write(`let cadena = "cadena de prueba";<br>`);
document.write(`let cadena2 = " cadena de prueba "<br>`);
document.write(`resultado = cadena.startsWith(cadena2);`);
resultado = cadena.startsWith(cadena2);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");
resultado = cadena.startsWith("cadena");
document.write(`resultado = cadena.startsWith("cadena");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>endsWith</h3>");
document.write(`let cadena = "cadena de prueba";<br>`);
document.write(`let cadena2 = " cadena de prueba "<br>`);
resultado = cadena.endsWith(cadena2);
document.write(`resultado = cadena.endsWith(cadena2);`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");
resultado = cadena.endsWith("prueba");
document.write(`resultado = cadena.endsWith("prueba");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>includes</h3>");
document.write(`let cadena = "cadena de prueba";<br>`);
document.write(`let cadena2 = " cadena de prueba "<br>`);
resultado = cadena.includes(cadena2);
document.write(`resultado = cadena.includes(cadena2);`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");
resultado = cadena.includes("cadena");
document.write(`resultado = cadena.includes("cadena");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>indexOf</h3>");
document.write(`let cadena = "cadena de prueba";<br>`);
document.write(`let cadena2 = " cadena de prueba "<br>`);
resultado = cadena.indexOf(cadena2);
document.write(`resultado = cadena.indexOf(cadena2);`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");
resultado = cadena.indexOf("prueba");
document.write(`resultado = cadena.indexOf("prueba");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>lastIndexOf</h3>");
document.write(`let cadena = "cadena de prueba";<br>`);
document.write(`let cadena2 = " cadena de prueba "<br>`);
resultado = cadena.lastIndexOf("prueba prueba prueba prueba");
document.write(`resultado = cadena.lastIndexOf("prueba prueba prueba prueba");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");
cadena = "cadena de prueba prueba prueba"
resultado = cadena.lastIndexOf("prueba");
document.write(`cadena = "cadena de prueba prueba prueba"`);
document.write(`resultado = cadena.lastIndexOf("prueba");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>padStart</h3>");
cadena = "abc";
document.write(`cadena = "abc";<br>`);
// document.write(`let cadena2 = " cadena de prueba "<br>`);
resultado = cadena.padStart(6,"l");
document.write(`resultado = cadena.padStart(6,"l");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>padEnd</h3>");
cadena = "abc";
document.write(`cadena = "abc";<br>`);
// document.write(`let cadena2 = " cadena de prueba "<br>`);
resultado = cadena.padEnd(6,"l");
document.write(`resultado = cadena.padEnd(6,"l");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>repeat</h3>");
cadena = "abc";
document.write(`cadena = "abc";<br>`);
resultado = cadena.repeat(6);
document.write(`resultado = cadena.repeat(6);`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>split</h3>");
cadena = "hola como estas";
document.write(`cadena = "hola como estas";<br>`);
resultado = cadena.split(" ");
document.write(`resultado = cadena.split(" ");`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>substring</h3>");
cadena = "hola como estas";
document.write(`cadena = "hola como estas";<br>`);
resultado = cadena.substring(0,4);
document.write(`resultado = cadena.substring(0,4);`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>substring</h3>");
cadena = "hola como estas";
document.write(`cadena = "hola como estas";<br>`);
resultado = cadena.substring(0,4);
document.write(`resultado = cadena.substring(0,3);`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>toLowerCase</h3>");
cadena = "LEONARDO";
document.write(`cadena = "LEONARDO";<br>`);
resultado = cadena.toLowerCase();
document.write(`resultado = cadena.toLowerCase();`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>toUpperCase</h3>");
cadena = "leonardo";
document.write(`cadena = "leonardo";<br>`);
resultado = cadena.toUpperCase();
document.write(`resultado = cadena.toUpperCase();`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>toString</h3>");
cadena = "555";
document.write(`cadena = "555";<br>`);
resultado = cadena.toString() + 5;
document.write(`resultado = cadena.toString() + 5;`);
document.write("<br><b>Resultado: </b>" + resultado + "<br>");

document.write("<h3>trim</h3>");
cadena = " Leonardo ";
document.write(`cadena3 = " Leonardo ";<br>`);
document.write(`let a = cadena.length;<br>`);
let a = cadena.length;
document.write("<b>Resultado: </b>" + a)
document.write(`<br>let b = cadena.trim().length;`);
let b = cadena.trim().length;
document.write("<br><b>Resultado: </b>" + b);