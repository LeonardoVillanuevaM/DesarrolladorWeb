/*
A) Cofla feliz por haber empezado las clases volvió a sus casa y ya tiene la tarea básica de cálculo.
Tiene que hacer un par de ejercisio de matemáticas que incluyen suma, resta, multiplicación y división.
	- Crear una multiplicadora que nos simplifique el trabajo.
*/
const menu = (opcion) => {
	var menu = `Selecciona una Opcion:\n
	1:Suma\n
	2:Resta\n
	3:Multiplicación\n
	4:División.`;
	var opcion = Number(prompt(menu));
	return opcion;
}


const capturarNum1 = (num1) =>{
	var num1 = Number(prompt("Ingresa Numero 1: "));
	return num1;
}

const capturarNum2 = (num2) =>{
	var num2 = Number(prompt("Ingresa Numero 2: "));
	return num2;
}

const suma = (resultado) =>{
	num1 = capturarNum1();
	num2 = capturarNum2();
	let sumar = num1 + num2;
	resultado = `${num1} + ${num2} = ${sumar}`;
	document.write("<b>SUMA: </b>" + resultado +"<br>");
	return resultado;
}

const resta = (resultado) =>{
	num1 = capturarNum1();
	num2 = capturarNum2();
	let restar = num1 - num2;
	resultado = `${num1} - ${num2} = ${restar}`;
	document.write("<b>RESTA: </b>" + resultado +"<br>");
	return resultado;
}

const multiplicacion = (resultado) =>{
	num1 = capturarNum1();
	num2 = capturarNum2();
	let multiplicar = num1 * num2;
	resultado = `${num1} x ${num2} = ${multiplicar}`;
	document.write("<b>MULTIPLICACION: </b>" + resultado +"<br>");
	return resultado;
}

const division = (resultado) =>{
	num1 = capturarNum1();
	num2 = capturarNum2();
	let dividir = num1 / num2;
	resultado = `${num1} / ${num2} = ${dividir}`;
	document.write("<b>DIVISION: </b>" + resultado +"<br>");
	return resultado;
}

numOpcion = Number(prompt("Cuántas operaciones quieres realizar?"));

for (var i = 0; i < numOpcion; i++) {
	menuPrincipal =  menu();
	switch (menuPrincipal) {
	  case 1:
	  	alert(suma());
	    break;
	  case 2:
	    alert(resta());
	    break;  
	  case 3:
	  	alert(multiplicacion());
	  	break;
	  case 4:
	  	alert(division());
	  	break;	  
	  default:
	    alert("Ingresa una opcion valida");
	    i--;
	    break;
	}
}