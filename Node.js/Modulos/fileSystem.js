const fs = require("fs");

// Leer un archivo
console.log("Antes de leer el archivo");
fs.readFileSync("index.html", "utf-8", (err, contenido) =>{
    if(err){
        throw err;
    }
    console.log(contenido);
});
console.log("Despues de leer el archivo");

// Cambiar nombre del archivo
console.log("Antes de renombrar el archivo");
fs.renameSync("index.html","main.html", (err)=>{
    if(err){
        throw err;
    }
    console.log("Nombre Cambiado Exitosamente");
});
console.log("Despues de renombrar el archivo");

// Agregar contenido al final de un archivo.
console.log("Antes de agregar contenido al final del archivo");
fs.appendFileSync("index.html","<p>hola</p>", (err)=>{
    if(err){
        throw err;
    }
    console.log("Archivo Actualizado");
});
console.log("Despues de agregar contenido al final del archivo");

// Remplazar todo el contenido del archivo
console.log("Antes de remplazar el contenido del archivo");
fs.writeFileSync("index.html","Contenido nuevo", (err)=>{
    if(err){
        throw err;
    }
    console.log("Contenido Remplazado Exitosamente");

});
console.log("Depues de remplazar el contenido del archivo");

//Eliminar archivo
console.log("Antes de eliminar el archivo");
fs.unlinkSync("index.html", (err)=>{
    if(err){
        throw err;
    }
    console.log("Archivo Eliminado");
});
console.log("Despues de eliminar el archivo");