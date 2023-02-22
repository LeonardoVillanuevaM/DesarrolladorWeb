const promesaCumplida = false;

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        if(promesaCumplida){
            resolve('¡Promesa Cumplida!');
        }else{
            reject('Promesa Rechazada....');
        }
    }, 3000);
});

// miPromesa.then((valor)=>{
//     console.log(valor);
// });

const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);
