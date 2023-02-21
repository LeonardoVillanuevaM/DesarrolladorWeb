document.write("<h2>Array Asociativos</h2>");

let datos = {
	nombre: "Leonardo",
	apellido: "Villanueva",
	edad : "22",
	domicilio : "Zumpango"
};

let nombre = datos["nombre"];
let apellido = datos["apellido"];
let edad = datos["edad"];
let domicilio = datos["domicilio"];

frase = `Mi nombre es: ${nombre} <br>
Mi apellido es: ${apellido} <br>
Mi edad es: ${edad} <br>
Mi domicilio es: ${domicilio}
`;

document.write(frase);


document.write("<h2>For in</h2>");

let animales = ["gato","perro","raton"];
for(animal in animales){
	document.write(animal + "<br>");
}

document.write("<h2>For of</h2>");
for(animal of animales){
	document.write(animal + "<br>");
}

document.write("<h2>Label</h2>");
array1 = [1,2,3,4];
array2 = [5,array1,6,7];
document.write(array2 + "<br><br>");


forLabel:
for (let array in array2){
	if(array == 2){
		for(let array of array1){
			document.write(array + "<br>");
			break;
		}

	}else{
		document.write(array2[array] + "<br>");
	}
	
}



