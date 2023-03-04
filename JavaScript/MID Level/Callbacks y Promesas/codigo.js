const obtenerInformacion = (text)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(text)},Math.random()*200)
	});
}
// SIN ORDEN(sin await)
// obtenerInformacion("1.-Leonardo").then(resultado => console.log(resultado));
// obtenerInformacion("2.-Villanueva").then(resultado => console.log(resultado));
// obtenerInformacion("3.-Medina").then(resultado => console.log(resultado));

// CON ORDEN(con await)
const mostrarInformacion = async () =>{
	data1 = await obtenerInformacion("1.-Leonardo");
	data2 = await obtenerInformacion("2.-Villanueva");
	data3 = await obtenerInformacion("3.-Medina");
	console.log(data1);
	console.log(data2);
	console.log(data3);
}

mostrarInformacion();