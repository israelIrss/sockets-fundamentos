const express = require('express');
const socketIO = require('socket.io'); //importamos sockets
const http = require('http');
const path = require('path');

const app = express(); //servidor xpress
let server = http.createServer(app); //servidor http
console.log(path.resolve(__dirname, '../public'));
const publicPath = path.resolve(__dirname, '../public'); // se hace publica la carpeta public
const port = process.env.PORT || 3000; // se selecciona el puerto en donde va a correr

app.use(express.static(publicPath));
//comunicacion del backend
module.exports.io = socketIO(server); //se inciializan los sockets
require('./sockets/sockets');


server.listen(port, (err) => { //verifica que este corriendo en http

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});