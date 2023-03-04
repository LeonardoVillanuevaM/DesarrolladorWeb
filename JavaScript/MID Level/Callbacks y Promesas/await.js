const objeto = {
	propiedad1 : 'valor1',
	propiedad2 : 'valor2',
	propiedad3 : 'valor3'
};

const obtenerInformacion = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(objeto)
		},5000);
	});
}

// obtenerInformacion().then(resultado=>{
// 	console.log(resultado);
// });

// async function mostrarInformacion (){
// 	resultado = await obtenerInformacion();
// 	console.log(respuesta);
// }

const mostrarInformacion = async ()=>{
	resultado = await obtenerInformacion();
	console.log(resultado);
}

mostrarInformacion();