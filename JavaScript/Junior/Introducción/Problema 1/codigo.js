/*
A) 3 chicos  de 23 años entra a un heladeria a comprar un helado pero hay un problema: los precios no
estan al lado de cada estante con su respectivo helado.
Ellos piensa comprar el helado mas caro que puedan con el dinero que tienen

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de los helados son los siguientes:
Palito de helado de agua: $0.6 USD
Palito de helado de crema: $1 USD
Bombon helado de marca heladix: $1.6 USD
Bombon helado de marca heladovich: $1.7 USD
Bombon helado de marca helardo: $1.8 USD
Potecito de helado con confites: $2.9 USD
Pote de 1/4 KG : $2.9 USD

Soluciones:
- Pedirles que ingresen el monto que tiene y mostrarles el helado mas caro que pueden comprar
- Si hay 2 o mas con el mismo precio, mostrar ambos.
- Cofla quiere saber cuanto es su cambio


*/
var dinRoberto = 0, dinPedro = 0, dinCofla = 0;
dinRoberto = prompt("Cuánto dinero tienes, Roberto?");
dinPedro = prompt("Cuánto dinero tienes, Pedro?");
dinCofla = prompt("Cuánto dinero tienes, Cofla?");


const palitoAgua = 0.6;
const palitoCrema = 1;
const bombonHeladix = 1.6;
const bombonHeladovich = 1.7;
const bombonHelardo = 1.8;
const potecito = 2.9;
const pote = 2.9;

if(dinRoberto >= palitoAgua && dinRoberto < palitoCrema){
	dinRoberto -= palitoAgua;
	document.write("Roberto comprate el helado de palitoAgua<br>");	
	document.write("Tu cambio es : " + dinRoberto);	
}else if(dinRoberto >= palitoCrema && dinRoberto < bombonHeladix){
	dinRoberto -= palitoCrema;
	document.write("Roberto comprate el helado de palitoCrema<br>")	;
	document.write("\nTu cambio es : " + dinRoberto);	
}else if(dinRoberto >= bombonHeladix && dinRoberto < bombonHeladovich){
	dinRoberto -= bombonHeladix;
	document.write("Roberto comprate el helado de bombonHeladix<br>")	;
	document.write("\nTu cambio es : " + dinRoberto);	
}else if(dinRoberto >= bombonHeladovich && dinRoberto < bombonHelardo){
	dinRoberto -= bombonHeladovich;
	document.write("Roberto comprate el helado de bombonHeladovich<br>")	;
	document.write("\nTu cambio es : " + dinRoberto);	
}else if(dinRoberto >= bombonHelardo && dinRoberto < potecito){
	dinRoberto -= bombonHelardo;
	document.write("Roberto comprate el helado de bombonHelardo<br>")	;
	document.write("\nTu cambio es : " + dinRoberto);	
}else if(dinRoberto >= potecito){
	dinRoberto -= potecito;
	document.write("Roberto comprate el helado de potecito ó el helado pote<br>")	;
	document.write("\nTu cambio es : " + dinRoberto);	
}else{
	document.write("No te alcanza para ningun helado");	
}
document.write("<br><br>");	
if(dinPedro >= palitoAgua && dinPedro < palitoCrema){
	dinPedro -= palitoAgua;
	document.write("Pedro comprate el helado de palitoAgua<br>");	
	document.write("Tu cambio es : " + dinPedro);	
}else if(dinPedro >= palitoCrema && dinPedro < bombonHeladix){
	dinPedro -= palitoCrema;
	document.write("Pedro comprate el helado de palitoCrema<br>")	;
	document.write("\nTu cambio es : " + dinPedro);	
}else if(dinPedro >= bombonHeladix && dinPedro < bombonHeladovich){
	dinPedro -= bombonHeladix;
	document.write("Pedro comprate el helado de bombonHeladix<br>")	;
	document.write("\nTu cambio es : " + dinPedro);	
}else if(dinPedro >= bombonHeladovich && dinPedro < bombonHelardo){
	dinPedro -= bombonHeladovich;
	document.write("Pedro comprate el helado de bombonHeladovich<br>")	;
	document.write("\nTu cambio es : " + dinPedro);	
}else if(dinPedro >= bombonHelardo && dinPedro < potecito){
	dinPedro -= bombonHelardo;
	document.write("Pedro comprate el helado de bombonHelardo<br>")	;
	document.write("\nTu cambio es : " + dinPedro);	
}else if(dinPedro >= potecito){
	dinPedro -= potecito;
	document.write("Pedro comprate el helado de potecito ó el helado pote<br>")	;
	document.write("\nTu cambio es : " + dinPedro);	
}else{
	document.write("No te alcanza para ningun helado");	
}
document.write("<br><br>");	
if(dinCofla >= palitoAgua && dinCofla < palitoCrema){
	dinCofla -= palitoAgua;
	document.write("Cofla comprate el helado de palitoAgua<br>");	
	document.write("Tu cambio es : " + dinCofla);	
}else if(dinCofla >= palitoCrema && dinCofla < bombonHeladix){
	dinCofla -= palitoCrema;
	document.write("Cofla comprate el helado de palitoCrema<br>")	;
	document.write("\nTu cambio es : " + dinCofla);	
}else if(dinCofla >= bombonHeladix && dinCofla < bombonHeladovich){
	dinCofla -= bombonHeladix;
	document.write("Cofla comprate el helado de bombonHeladix<br>")	;
	document.write("\nTu cambio es : " + dinCofla);	
}else if(dinCofla >= bombonHeladovich && dinCofla < bombonHelardo){
	dinCofla -= bombonHeladovich;
	document.write("Cofla comprate el helado de bombonHeladovich<br>")	;
	document.write("\nTu cambio es : " + dinCofla);	
}else if(dinCofla >= bombonHelardo && dinCofla < potecito){
	dinCofla -= bombonHelardo;
	document.write("Cofla comprate el helado de bombonHelardo<br>")	;
	document.write("\nTu cambio es : " + dinCofla);	
}else if(dinCofla >= potecito){
	dinCofla -= potecito;
	document.write("Cofla comprate el helado de potecito ó el helado pote<br>")	;
	document.write("\nTu cambio es : " + dinCofla);	
}else{
	document.write("No te alcanza para ningun helado");	
}
	