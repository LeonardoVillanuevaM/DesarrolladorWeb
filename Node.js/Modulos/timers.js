function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

function sumar(n1,n2){
    console.log(`${n1} + ${n2} = ${n1 + n2}`);

}

// mostrarTema("Node.js");

setTimeout(mostrarTema, 6000, "Node.js - Timeout");
setTimeout(sumar, 7000, 4 ,5);

console.log(`Antes de setImmediate()`);
setImmediate(mostrarTema, "Node.js - Immediate");
console.log(`Despues de setImmediate()`);

setInterval(mostrarTema, 1500, "Node.js - Interval");
setInterval(sumar, 1500, 5, 6);