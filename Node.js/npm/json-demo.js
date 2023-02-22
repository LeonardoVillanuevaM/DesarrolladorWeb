// const curso = require("./curso.json");

// console.log(typeof curso);
// console.log(curso.nombre);

let infoCurso = {
    "nombre": "Leonardo Villanueva Medina",
    "titulo": "Ing. En Computacion",
    "universidad": "UAEM",
    "centroUniversitario": "Zumpango",
    "numCuenta": 1870422,
    "numSemestres": 9,
    "lineasAcentuacion": [
        "Interaccion Hombre-Maquina",
        "Redes"
    ],
    "esPublica": "true"
}

// console.log(typeof infoCurso);
// console.log(infoCurso);

//Objeto -> String
//Convertir de JavaScript a JSON
let infoJSON = JSON.stringify(infoCurso);
console.log("\nFormato JSON:\n");
console.log("Tipo de Dato: " + typeof infoJSON);
console.log(infoJSON);

//String -> Objeto
//Convertir de JSON a JavaScript
let infoString = JSON.parse(infoJSON);
console.log("\nFormato String:\n");
console.log("Tipo de Dato: " + typeof infoString);
console.log(infoString);
console.log(infoString.nombre);
