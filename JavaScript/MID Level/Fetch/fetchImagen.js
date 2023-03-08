//PETICION GET con Imagen
const imagen = document.querySelector(".imagen");

fetch("desarrolladorWeb.jpg")
	.then(res=>res.blob())
	.then(img=>{
		console.log(img);
		imagen.src = URL.createObjectURL(img)
	});