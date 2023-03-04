let numero = prompt("Ingresa un Numero: ");

const promesa = new Promise((resolve,reject)=>{
	if(numero % 2 == 0){
		resolve(`${numero} es par`);
	}else{
		reject(`${numero} es impar`);
	}

});

//Acceder a los valores
promesa.then((resultado)=>{
	console.log(resultado);
}).catch((error)=>{
	console.log(error);
});