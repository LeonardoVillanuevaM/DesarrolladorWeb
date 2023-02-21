/*
Cofla se quedo encerrado en su casa porque se le rompió la llave, pero necesita ir urgente a la facultad porque no puede faltar ni una sola vez si quiere aprobar las materias que le falten,
ya que está al limite de asistencias, entonces tiene que llamar un cerrajero y pedirle que traiga la llave indicada, no hya tiempo suficiente como para que el cerrajero vea cual es la llave
indicada, solo puede traer una y probar, entonces Cofla se da cuenta que es una llave antigua, por ende no hace falta afilarla, solo necesita decirle el modelo de llave para que el
cerrajero venga, pero Cofla tiene tanta mala suerte que ni siquiera tiene interner para poder buscar, lo que si tiene es a un programador que le hará un sistema para mostrarle las llaves 
posibles y determinar cual es la indicada, hay solo 10 modelos posibles, permitir que Cofla seleccione el indicado
	Crear Soluciones
	- Crear sistema que le muestre a Cofla las 10 llaves posibles, con sus 4 imagenes y Cofla debe seleccionar cual llave elegir, una vez que Cofla seleccionó la llave, envia los datos al
	servidor, otro programador se encargará de el resto.
*/
const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
	img = "<img class='llave-img' src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}

// const changeHidden = (number)=>{
// 	document.querySelector(".key-data").value = number;
// }

const changeHidden = function(number){
	document.querySelector(".key-data").value = number;
	alert("Seleccionaste la llave con modelo: " + number);
}

let documentFragment = document.createDocumentFragment();

for(i=1; i<=20; i++){
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+30);
	let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
	let div = document.createElement("DIV");
	// div.addEventListener("click",()=>{changeHidden(modeloRandom)});
	div.addEventListener("click",function(){
		changeHidden(modeloRandom)
	});
	div.tabIndex = i;
	div.classList.add(`item-${i}`,`flex-item`);
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
	documentFragment.appendChild(div);	
}

contenedor.appendChild(documentFragment);