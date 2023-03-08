//METODO GET en Fetch
// fetch("informacion.txt")
// 	.then(res=>res.json())
// 	.then(res=>console.log(res));

//METODO GET en Axios
axios.get("informacion.txt")
	.then(res=>console.log(res.data));

//METODO POST en Axios FORMA 1
axios.post("https://reqres.in/api/users",{
	"nombre" : "Leonardo",
	"apellido" : "Villanueva"
})
	.then(res=>console.log(res.data));

//METODO POST en Axios FORMA 2
axios("https://reqres.in/api/users",{
	method : "post",
	data : {"nombre":"Erika","apellido":"Pineda"}
})
	.then(res=>console.log(res.data));