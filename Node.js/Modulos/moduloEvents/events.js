const EventEmitter = require('events');
// console.log(EventEmitter);
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) =>{
    console.log(`Total de la compra: $${total}.`);
    console.log(`Numero de productos: ${numProductos}.`);
});

emisorProductos.on('entrega', () =>{
    console.log('Se realizo la entrega.\n');
});

emisorProductos.emit('compra', 500, 5);
emisorProductos.emit('entrega');

emisorProductos.emit('compra', 750), 6;
emisorProductos.emit('entrega');

emisorProductos.emit('compra', 900, 8);
emisorProductos.emit('entrega');
