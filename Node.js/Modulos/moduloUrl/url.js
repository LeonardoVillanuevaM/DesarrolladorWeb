const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log("HOSTNAME : " + miURL.hostname); //www.ejemplo.org
console.log("RUTA: " + miURL.pathname); ///cursos/programacion
console.log("QUERY: " + miURL.searchParams); //ordenar=vistas&nivel=1
console.log("TIPO: " + typeof miURL.searchParams);
console.log("VALOR ordenar: " + miURL.searchParams.get('ordenar'));
console.log("VALOR nivel: " + miURL.searchParams.get('nivel'));
