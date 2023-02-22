function ordenarProducto(producto){
    return new Promise((resolve,reject) =>{
        console.log(`Ordenando: ${producto} de OfficeDepot`);
        setTimeout(()=>{
            if(producto == 'taza'){
                resolve('Ordenando la taza');
            }else{
                reject('No se encontro el producto actualmente');
            }
        },3000);
    });
}

function procesarPedido(respuesta){
    return new Promise(resolve=>{
        console.log('Procesando respuesta');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(()=>{
            resolve('Pedido realizado exitosamente');
        },3000);
    });
}

// ordenarProducto('taza')
//     .then(respuesta =>{
//         console.log('repuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada =>{
//         console.log(respuestaProcesada);
//     })
//     .catch(err =>{
//         console.log(err);
//     });

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }catch(error){
        console.log(error);
    }    
}

realizarPedido('taza');