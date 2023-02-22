const estatusPedido = () =>{
  return Math.random() < 0.49;
};

// for(let i=0; i<10; i++){
//     console.log(estatusPedido());
// }

const miPedidoDePizza = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido Exitoso, la pizza esta en camino');
        }else{
            reject('Ocurrio un error, por favor intente nuevamente');
        }
    }, 3000)
});

// const manejarPedido = (mensajeDeConfirmacion)=>{
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError)=>{
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido,rechazarPedido);

miPedidoDePizza
    .then((mensajeDeConfirmacion) =>{
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) =>{
        console.log(mensajeDeError);
    });