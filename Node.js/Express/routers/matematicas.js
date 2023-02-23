const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

//Middleware
routerMatematicas.use(express.json());

routerMatematicas.get('/',(req,res)=>{
    res.json(matematicas);
});

routerMatematicas.get('/:tema',(req,res)=>{
    const tema = req.params.tema;
    const resultados = matematicas.filter(curso => curso.tema == tema);
    if(resultados.length == 0){
        return res.status(404).end();
        // return res.status(404).send(`NO se encontraron cursos de ${tema}`);
    }
    if(req.query.ordena === 'vistas'){
        console.log(req.query.ordena);
        return res.json(resultados.sort((a, b) => b.vistas - a.vistas));
    }
    res.json(resultados);
});

routerMatematicas.post('/', (req,res)=>{
    let cursoNuevo = req.body;
    matematicas.push(cursoNuevo);
    res.send(matematicas);
});

routerMatematicas.put('/:id', (req,res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        matematicas[indice] = cursoActualizado;
    }else{
        res.end(`No se encontro la solicitud con id: ${id}`);
        return res.status(404).end();
    }

    res.json(matematicas);
});

routerMatematicas.patch('/:id', (req,res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        const cursoAModificar = matematicas[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }else{
        res.end(`No se encontro la solicitud con id: ${id}`);
        return res.status(404).end();
    }
    res.json(matematicas);
});

routerMatematicas.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const indice = matematicas.findIndex(curso => curso.id == id);

    if(indice >= 0){
        matematicas.splice(indice, 1);
    }else{
        res.end(`No se encontro la solicitud con id: ${id}`);
        return res.status(404).end();
    }

    res.json(matematicas);
});

module.exports = routerMatematicas;