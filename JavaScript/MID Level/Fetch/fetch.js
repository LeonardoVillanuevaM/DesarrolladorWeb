/*
peticion = fetch("https://reqres.in/api/unknowm/2");
//Nos muestra lo que obtiene del servidor(GET)
peticion.then(res=>res.text())
		.then(res=>console.log(res))
// console.log(peticion);
*/
//PETICION GET
//Formato String
fetch("https://reqres.in/api/unknowm/2").then(res=>res.text())
										.then(res=>{
											console.log(typeof res)	
											console.log(res)
										});
//Formato Object
fetch("https://reqres.in/api/unknowm/2").then(res=>res.json())
										.then(res=>{
											console.log(typeof res)
											console.log(res)
										});

//PETICION POST
fetch("https://reqres.in/api/users",{
	method : "POST",
	// body : JSON.stringify({
	// 	"nombre" : "Leonardo",
	// 	"apellido" : "Villanueva"
	// })
	body : `{
		"nombre" : "Leonardo",
		"apellido" : "Villanueva"
	}`,
	headers: {
		"Content-type" : "application/json"
	}
}).then(res=>res.json())
  .then(res=>{
 	  console.log(typeof res)
 	  console.log(res)
 });

let headers = {
	method : "POST",
	body : `{"nombre" : "Erika","apellido" : "Pineda"}`,
	headers: {"Content-type" : "application/json"}
};

fetch("https://reqres.in/api/users",headers)
	.then(res=>res.json())
	.then(res=>console.log(res));