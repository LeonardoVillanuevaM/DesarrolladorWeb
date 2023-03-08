let peticion;
if(window.XMLHttpRequest){
	peticion = new XMLHttpRequest();	
}else{
	//Si el navegador es Internt Explorer
	peticion = new ActiveXObject("Microsoft.XMLHTTP");
}



/*
LO QUE ANTERIORMENTE SE REALIZABA
peticion.addEventListener("readystatechange",()=>{
	// console.log(peticion.readyState);
	// console.log(peticion.response);
	if (peticion.readyState == 4 && peticion.status == 200){
		console.log("Estado de peticion 4\n" + peticion.response);
	}
});
*/
//LO QUE SE REALIZA AHORA
peticion.addEventListener("load",()=>{
	if(peticion.status == 200){
		//Convertir de String a JSON
		respuesta = JSON.parse(peticion.response);
		console.log(respuesta.nombre);		
		// console.log(typeof respuesta);
	}else{
		console.log("No se ha podido encontrar el recurso");
	}
});



//VariableXMLHttpRequest.open("METODO",URL)
peticion.open("GET","informacion.txt");
//Enviar Peticion
peticion.send();
// console.log(peticion);