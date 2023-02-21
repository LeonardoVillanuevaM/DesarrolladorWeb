document.write("<h2>Suma</h2>");

function suma(num1,num2) {
	let res = num1 + num2;
	return res;
}

let num1 = Number(prompt("Ingresa el numero 1: "));
let num2 = Number(prompt("Ingresa el numero 2: "));
let resultado =  suma(num1,num2);
document.write(`${num1} +  ${num2} = ${resultado}<br>`);

num1 = Number(prompt("Ingresa el numero 1: "));
num2 = Number(prompt("Ingresa el numero 2: "));
resultado =  suma(num1,num2);
document.write(`${num1} +  ${num2} = ${resultado}<br>`);

document.write("<h2>Saludar</h2>");
let name = prompt("¿Como te llamas?");
let frase = `Hola ${name}, ¿Como estas?`;
function saludar(nombre){
	document.write(frase + "<br>") 
}
saludar(name);

document.write("<h2>Funciones Flecha</h2>");
const saludarFlecha = nombre => document.write(frase + "<br>") 
saludarFlecha(name);