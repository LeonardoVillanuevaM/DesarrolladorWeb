//Función que llama a otra función
function prueba(callback){
	callback("Desarrollador Web");
}

prueba(puesto => alert(puesto));

class Persona{
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
};

persona = new Persona("Leonardo Villanueva","@Leolugo");
alert("Nombre: " + persona.nombre
	+ "\nInstagram: " + persona.instagram);

const data = [
	["Erika","@KikiPC"],
	["Susana","@Tutu"],
	["Eduardo","@Lalo"],
	["Pedro"],	
];

const personas = [];
for(var i=0; i < data.length; i++){
	personas[i] = new Persona(data[i][0],data[i][1]);
}

console.log(personas);

console.log("Funcion callback");
const obtenerPersona = (id,callback)=>{
	if(personas[id] == undefined){
		callback("No se ha encontrado la persona");
	}else{
		callback(null,personas[id],id);
	}
}


const obtenerInstagram = (id,callback)=>{
	if(personas[id].instagram == undefined){
		callback("No se ha encontrado el instagram de la persona");
	}else{
		callback(null,personas[id].instagram);
	}
}

obtenerPersona(3,(error,persona,id)=>{
	if(error){
		console.log(error);
	}else{
		console.log(persona.nombre);
		(obtenerInstagram(id,(error,persona)=>{
			if(error){
				console.log(error);
			}else{
				console.log(persona[id].instagram);
			}
		}));
	}
});


