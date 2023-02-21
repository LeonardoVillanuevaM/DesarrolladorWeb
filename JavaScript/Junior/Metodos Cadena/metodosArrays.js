let nombres = ["leonardo","erika","susana"];
document.write("Arreglo: <b>" + nombres + "</b><br>");
document.write("<h3><b>pop</b></h3>");
let resultado = nombres.pop();
document.write("Elemento Borrado: <b style='color:red'>" + resultado + "</b><br>");
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");

document.write("<h3><b>shift</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.shift();
document.write("Elemento Borrado: <b style='color:red'>" + resultado + "</b><br>");
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");

document.write("<h3><b>push</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.push("susana");
document.write("Elemento Agregado: <b style='color:green'>susana</b><br>");
document.write("Arreglo: <b>" + nombres + "</b><br>");

document.write("<h3><b>reverse</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.reverse();
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");

document.write("<h3><b>unshift</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.unshift("leonardo","villanueva");
document.write("Elemento Agregado: <b style='color:green'> leonardo, villanueva </b><br>");
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");

document.write("<h3><b>sort</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.sort();
document.write("Arreglo Nuevo: <b>" + resultado + "</b><br>");

document.write("<h3><b>splice</b></h3>");
nombres.push("leonardo");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.splice(1,1);
document.write("Elemento Borrado: <b style='color:red'>" + resultado + "</b><br>");
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");
resultado = nombres.splice(1,2,"zaide");
document.write("Elemento Remplazados: <b style='color:red'>" + resultado + "</b><br>");
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");
resultado = nombres.splice(2,0,"susana");
document.write("Elemento Agregados: <b style='color:green'>susana</b><br>");
document.write("Arreglo Nuevo: <b>" + nombres + "</b><br>");

numeros = [1,2,3,4,5,6,7,8,9,10];
document.write("<h3><b>join</b></h3>");
document.write("Arreglo: <b>" + numeros + "</b><br>");
resultado = numeros.join("<br><b>Elemento: </b>");
document.write("<b>Elemento: </b>" + resultado + "<br>");

document.write("<h3><b>slice</b></h3>");
document.write("Arreglo: <b>" + numeros + "</b><br>");
resultado = numeros.slice(0,5);
document.write("Nuevo Arreglo: <b>" + resultado + "</b><br>");

document.write("<h3><b>filter</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
resultado = nombres.filter(nombre=> nombre.length > 5)
document.write("Nuevo Arreglo: <b>" + resultado + "</b><br>");

document.write("<h3><b>forEach</b></h3>");
document.write("Arreglo: <b>" + nombres + "</b><br>");
nombres.forEach(function(nombre){
	document.write(nombre + "<br>");	
}) 