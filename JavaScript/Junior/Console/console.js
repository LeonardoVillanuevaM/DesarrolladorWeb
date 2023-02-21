document.write("<h3><b>console.assert()</b></h3><br>");
document.write(`console.assert(5>3);<br>`);
console.assert(5 > 3);
document.write("Sin error de aserción<br>");
document.write(`console.assert(3>5);<br>`);
document.write("Error de aserción<br>");

document.write("<h3><b>console.clear()</b></h3><br>");
document.write("Limpiar Consola<br>");

document.write("<h3><b>console.error()</b></h3><br>");
console.error("Leonardo");
document.write(`console.error("Leonardo");<br>`);
document.write(`<b style=color:red>Leonardo</b>`);

document.write("<h3><b>console.info()</b></h3><br>");
console.info("Leonardo Villanueva Medina");
document.write(`console.info("Leonardo Villanueva Medina");<br>`);
document.write(`Leonardo Villanueva Medina`);

document.write("<h3><b>console.log()</b></h3><br>");
console.info("Leonardo Villanueva Medina");
document.write(`console.log("Leonardo Villanueva Medina");<br>`);
document.write(`Leonardo Villanueva Medina`);

document.write("<h3><b>console.table()</b></h3><br>");
console.table([1,2,3,4,5,6,7,8]);
document.write(`console.table([1,2,3,4,5,6,7,8]);<br>`);

document.write("<h3><b>console.warn()</b></h3><br>");
console.warn("Advertencia");
document.write(`console.warn("Advertencia");<br>`);
document.write(`<b style=color:#c7a338>Advertencia</b>`);

document.write("<h3><b>console.count()</b></h3><br>");
console.count();
console.count();
document.write(`console.count();<br>`);
document.write(`console.count();<br>`);
document.write(`1<br>`);
document.write(`2`);

document.write("<h3><b>console.countReset()</b></h3><br>");
console.countReset();
document.write(`console.count()Reset;<br>`);
console.count();
document.write(`console.count();<br>`);
document.write(`1`);
