const http = require('http');
const {infoCursos} = require('./cursos.js');

const servidor = http.createServer((req,res)=>{
    const {method} = req;

switch(method){
    case 'GET':
        return manejarSolicitudGET(req,res);
    case 'POST':
        return manejarSolicitudPOST(req,res);
    case 'PUT':
        return manejarSolicitudPUT(req,res);
    case 'DELETE':
        return manejarSolicitudDELETE(req,res);
    default:
        res.statusCode = 501;
        res.end(`El metodo usado no puede ser manejado por el servidor: ${method}`);
        break;
}

});

function manejarSolicitudGET(req,res){
    const path = req.url;

    if(path == '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    }else if(path == '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    }else if(path == '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }else if(path == '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.matematicas));  
    }
    res.statusCode = 404;
    return res.end(`El recurso solicitado no existe ${path}`);
}

function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path == '/cursos/programacion'){
        let body = '';
        req.on('data', contenido =>{
            body += contenido.toString();
        });
        req.on('end', () =>{
            console.log(body);
            console.log(typeof body);
            // Convertir a un objeto de JavaScript de formato JSON
            body = JSON.parse(body);
            console.log(body);
            console.log(typeof body);
            console.log(body.titulo);
            res.end(`El servidor recibio una solicitud POST para ${path}`);
        });
        // return res.end(`El servidor recibio una solicitud POST para ${path}`);
    }
}

function manejarSolicitudPUT(req,res){
    const path = req.url;
    if(path == '/cursos/matematicas'){
        res.statusCode = 200;
        res.end(`El servidor recibio una solicitud PUT para ${path}`);
    }

}

function manejarSolicitudDELETE(req,res){
    const path = req.url;
    if(path == '/cursos'){
        res.statusCode = 200;
        res.end(`El servidor recibio una solicitud DELETE para ${path}`);
    }
}


const PUERTO = 3000;

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
