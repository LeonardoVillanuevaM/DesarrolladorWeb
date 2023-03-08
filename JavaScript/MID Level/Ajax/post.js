let peticion;
if(window.XMLHttpRequest){
	peticion = new XMLHttpRequest();	
}else{
	//Si el navegador es Internt Explorer
	peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

peticion.addEventListener("load",()=>{
	let respuesta;
	if(peticion.status == 200 || peticion.status == 201){
		//Convertir de String a JSON
		respuesta = peticion.response;
		console.log("Nombre: " + respuesta);		
	}else{
		console.log("No se ha podido encontrar el recurso");
	}
});



//VariableXMLHttpRequest.open("METODO",URL)
peticion.open("POST","https://reqres.in/api/users");
peticion.setRequestHeader("Content-type","application/json;charset=UTF8");
//Enviar peticion
peticion.send(JSON.stringify({
	"nombre" : "morfeo",
	"trabajo" : "lider"
}));
// console.log(peticion);