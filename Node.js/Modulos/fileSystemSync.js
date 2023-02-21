const fs = require("fs");

// Leer un archivo
console.log("Antes de leer el archivo");
const archivo = fs.readFileSync("index.html", "utf-8");
console.log(archivo)
console.log("Despues de leer el archivo");

// Cambiar nombre del archivo
console.log("Antes de renombrar el archivo");
fs.renameSync("index.html","main.html");
console.log("Despues de renombrar el archivo");

// Agregar contenido al final de un archivo.
console.log("Antes de agregar contenido al final del archivo");
fs.appendFileSync("main.html","<p>hola</p>");
console.log("Despues de agregar contenido al final del archivo");

// Remplazar todo el contenido del archivo
console.log("Antes de remplazar el contenido del archivo");
fs.writeFileSync("main.html","Contenido nuevo");
console.log("Depues de remplazar el contenido del archivo");

//Eliminar archivo
console.log("Antes de eliminar el archivo");
fs.unlinkSync("main.html");
console.log("Despues de eliminar el archivo");