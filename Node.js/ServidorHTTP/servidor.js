const http = require('http');

const servidor = http.createServer((req,res) =>{
    // console.log('===> req (solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    console.log('===> res (respuesta)');
    console.log(res.statusCode); // 200 OF
    // res.statusCode = 404; // 404 Not Found
    // console.log(res.statusCode);
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());
    res.end('El servidor, dice hola');
});

const PUERTO = 3000;

servidor.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en http://localhost:${PUERTO}....`);
});



