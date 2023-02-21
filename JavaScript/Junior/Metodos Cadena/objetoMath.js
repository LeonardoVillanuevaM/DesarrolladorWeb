document.write("<h3>sqrt()</h3>");
let numero = Math.sqrt(25);
document.write("<br>Raíz de 25 = " + numero);

document.write("<h3>cbrt()</h3>");
numero = Math.cbrt(27);
document.write("<br>Raíz de 27 = " + numero);

document.write("<h3>max()</h3>");
document.write("30,25,1,2,3,5,4,8,55,54<br>")
numero = Math.max(30,25,1,2,3,5,4,8,55,54);
document.write("<br>Numero maximo = " + numero);

document.write("<h3>min()</h3>");
document.write("30,25,1,2,3,5,4,8,55,54<br>")
numero = Math.min(30,25,1,2,3,5,4,8,55,54);
document.write("<br>Numero minimo = " + numero);

document.write("<h3>random()</h3>");
document.write("Numero aleatorio del 0 al 100<br>")
numero = 1 + Math.floor(Math.random() * 99);
document.write("<br>Numero aleatorio = " + numero);

document.write("<h3>round()</h3>");
numero = Math.round(9.5);
document.write("<br>Numero redondeado de 9.8 = " + numero);
numero = Math.round(9.4);
document.write("<br>Numero redondeado de 9.4 = " + numero);

document.write("<h3>trunc()</h3>");
numero = Math.trunc(9.8);
document.write("<br>9.8 = " + numero);
numero = Math.trunc(9.4);
document.write("<br>9.4 = " + numero);