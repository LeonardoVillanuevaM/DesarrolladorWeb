let  titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable","true");
titulo.setAttribute("dir","rtl");
titulo.style.backgroundColor = "blue";

const input = document.querySelector(".input-normal");
document.write(input.value)
document.write(input.type="color");

const inputArchivo = document.querySelector(".input-archivo")
inputArchivo.accept = "image/png";

const inputHola = document.querySelector(".input-hola");
inputHola.setAttribute("minLength","5");
inputHola.placeholder = "Minimo 5 Caracteres";
inputHola.required = "true";
inputHola.style.color = "red"; 
inputHola.style.padding = "30px";
   
let valor = titulo.classList.item(0);
document.write("<br>" + valor);
let valorContains = titulo.classList.contains("titulo");
document.write("<br>" + valorContains); 
if(valorContains){
	document.write("<br> La clase existe");
}else{
	document.write("<br> La clase no existe");
}
titulo.classList.toggle("titulo");
valorContains = titulo.classList.contains("titulo");
if(valorContains){
	document.write("<br> La clase existe");
}else{
	document.write("<br> La clase no existe");
}
valor = titulo.classList.replace("remplazo","titulo");
valorContains = titulo.classList.contains("titulo");
if(valorContains){
	document.write("<br> La clase existe");
}else{
	document.write("<br> La clase no existe");
}

let resultado = titulo.textContent;
document.write("<br>" + resultado);
resultado = titulo.innerText;
document.write("<br>" + resultado);   
resultado = titulo.outerHTML;
document.write("<br>" + resultado);
resultado = titulo.innerHTML;
document.write("<br>" + resultado);

