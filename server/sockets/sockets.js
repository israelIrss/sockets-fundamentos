//archivos de configuracion sockets

const { io } = require('../server');

io.on('connection', (client) => { // se agrega cliente para saber quien se conecto
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenido a esta aplicacion'
    });

    //cliente desconectado
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar a cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!!!'
        //     });
        // }


    });

}); //saber cuando un usuario se conecta al servidor