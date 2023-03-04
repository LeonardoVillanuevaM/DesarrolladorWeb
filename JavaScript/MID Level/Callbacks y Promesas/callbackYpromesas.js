class Persona{
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
};

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

console.log("Funcion callback y promesas");

const obtenerPersona = (id)=>{
	return new Promise((resolve,reject)=>{
		if(personas[id] == undefined){
			reject("No se ha encontrado el id de la persona");
		}else{
			resolve(personas[id]);
		}
	});
}


const obtenerInstagram = (id)=>{
	return new Promise((resolve,reject)=>{
		if(personas[id].instagram == undefined){
			reject("No se ha encontrado el instagram de la persona");
		}else{
			resolve(personas[id].instagram);
		}
	});
}

let idSearch = prompt("Ingresa el Id que deseas buscar: ")
obtenerPersona(idSearch).then((persona)=>{
	console.log(persona.nombre);
	return obtenerInstagram(idSearch);
}).then((instagram)=>{
		console.log(instagram);
}).catch((error)=>{
	console.log(error);
});
