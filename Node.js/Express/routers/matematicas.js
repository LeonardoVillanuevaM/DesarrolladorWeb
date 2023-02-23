const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/',(req,res)=>{
    res.send(JSON.stringify(matematicas));
});

routerMatematicas.get('/:tema',(req,res)=>{
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema == tema);
    if(resultados.length == 0){
        return res.status(404).send(`NO se encontraron cursos de ${tema}`);
    }
    if(req.query.ordena === 'vistas'){
        console.log(req.query.ordena);
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }
    res.send(JSON.stringify(resultados));
});

module.exports = routerMatematicas;