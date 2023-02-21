/*
Cofla ya está terminando el primer semestre del primer ciclo, la tarea que debe realizar es mas avanzada de la que tenia antes,
adempas de suma, resta, multiplicación y división.
Ahora también necesitara calcular potencias, raices cuadradas y cúbicas.

	Crear soluciones:
	- Perfeccionar calculadora para poder implementar las nuevas funciones
*/

class calculadora{
	sumar(num1,num2){
		return parseInt(num1) + parseInt(num2);
	}
	restar(num1,num2){
		return parseInt(num1) - parseInt(num2);
	}
	multiplicar(num1,num2){
		return parseInt(num1) * parseInt(num2);
	}
	dividir(num1,num2){
		return parseInt(num1) / parseInt(num2);
	}
	potenciar(num1,exp){
		return Math.pow(parseInt(num1),parseInt(exp));
	}
	realizarRaiz2(num1){
		return Math.sqrt(num1);
	}
	realizarRaiz3(num1){
		return Math.cbrt(num1);
	}
}

var menu = `Selecciona una Opcion:\n
	1:Suma.\n
	2:Resta.\n
	3:Multiplicación.\n
	4:División.\n
	5:Potencia.\n
	6:Raiz Cuadrada\n
	7:Raiz Cubica`;
const objCalculadora = new calculadora();
numOpcion = Number(prompt("Cuántas operaciones quieres realizar?"));
for (var i = 0; i < numOpcion; i++) {
	var opcion = Number(prompt(menu));
	switch (opcion) {
  case 1:
  	num1 = Number(prompt("Ingresa el Numero 1: "))
  	num2 = Number(prompt("Ingresa el Numero 2: "))
  	document.write(`${num1} + ${num2} = ${objCalculadora.sumar(num1,num2)}<br>`);
    break;
  case 2:
    num1 = Number(prompt("Ingresa el Numero 1: "))
  	num2 = Number(prompt("Ingresa el Numero 2: "))
  	alert(objCalculadora.restar(num1,num2));
  	document.write(`${num1} - ${num2} = ${objCalculadora.restar(num1,num2)}<br>`);
    break;  
  case 3:
  	num1 = Number(prompt("Ingresa el Numero 1: "))
  	num2 = Number(prompt("Ingresa el Numero 2: "))
  	document.write(`${num1} * ${num2} = ${objCalculadora.multiplicar(num1,num2)}<br>`);
  	break;
  case 4:
  	num1 = Number(prompt("Ingresa el Numero 1: "))
  	num2 = Number(prompt("Ingresa el Numero 2: "))
  	alert(objCalculadora.dividir(num1,num2));
  	document.write(`${num1} / ${num2} = ${objCalculadora.dividir(num1,num2)}<br>`);
  	break;
  case 5:
  	num1 = Number(prompt("Ingresa la base: "))
  	num2 = Number(prompt("Ingresa el exponente: "))
  	alert(objCalculadora.potenciar(num1,num2));
  	document.write(`La potencia de ${num1} con el exponente ${num2} es: ${objCalculadora.potenciar(num1,num2)}<br>`);
  break;
  case 6:
  	num1 = Number(prompt("Ingresa la base: "))
  	alert(objCalculadora.realizarRaiz2(num1));
  	document.write(`La raiz cuadrada de ${num1} es: ${objCalculadora.realizarRaiz2(num1)}<br>`);
  break;
  case 7:
  	num1 = Number(prompt("Ingresa la base: "))
  	alert(objCalculadora.realizarRaiz3(num1));
  	document.write(`La raiz cubica de ${num1} es: ${objCalculadora.realizarRaiz3(num1)}<br>`);
  break;		  
  default:
    alert("Ingresa una opcion valida");
    i--;
    break;
	}
}
