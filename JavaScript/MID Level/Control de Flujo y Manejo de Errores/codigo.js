let nombre = "Erika";
//Sentencia de Bloque
{
	let nombre = "Leonardo";
	alert("Nombre dentro del bloque: " + nombre);	
}
alert("Nombre fuera del bloque: " + nombre);

let expr = prompt("Ingresa una fruta:\nPlatano \nManzana \nPera");

//Setencia de Control de Flujo
switch(expr){
	case 'Platano': 
		console.log("Esta fruta es de color amarillo");
		alert("Esta fruta es de color amarillo");
		break;
	case 'Manzana': 
		console.log("Esta fruta es de color rojo");
		alert("Esta fruta es de color rojo");
		break;
	case 'Pera': 
		console.log("Esta fruta es de color verde");
		alert("Esta fruta es de color verde");
		break;
	default:
		console.log("Esa fruta no esta disponible");
		alert("Esa fruta no esta disponible");
		break;
}

//Manejo de Excepciones

try{
	leonardo
//catch Incondicional
}catch(error){
	console.log(error);
	console.log("Tipo de error: " + typeof error);
}

try{
	leonardo
//catch Condicional
}catch(error){
	let opcion = prompt("Ingresa un numero\n1\n2");
	if(opcion == 1){
		console.log("Error de Tipo 1");
	}else if(opcion == 2){
		console.log("Error de Tipo 2");
	}else{
		console.log("Error de Otro Tipo");
	}
}finally {
	console.log("Con error o Sin error me ejecuto");
}


const pruebaTry = ()=>{
	try{
		return 1;
	}catch{
		return 2;
	}finally{
		return 3;
	}
}

console.log("Funcion: " + pruebaTry());