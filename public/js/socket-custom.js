var socket = io(); //saber cuando estas conectado
//los on escuchan informacion
socket.on('connect', function() {
    console.log('conectado al servidor'); //debe mostarse en la consola al recargar
});
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor ');
});
//los emits son para enviar informacion 
socket.emit('enviarMensaje', {
    usuario: 'israel',
    menssaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta del servidor: ', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});