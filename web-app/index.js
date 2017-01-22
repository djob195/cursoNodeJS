'use strict'; // Archivo obrigatorio

const http = require('http'); // Realiza el protocolo http
const express = require('express');
const fs = require('fs');

//const configJson = fs.readFileSync('./config.json'); // lee el archivo

fs.readFile('./config.json','utf8',function(err,data){
    const config = JSON.parse(data); 

    const app = express(); // Produce nuestra aplicacion

    app.use(express.static(config.webServer.folder)); // carpeta donde esta los archivos

    const httpServer = http.createServer(app); // Crea el servidor 

    httpServer.listen(config.webServer.port,function(err){
        if (err)
        {
            console.log(err.message);
            return;
        }

        console.log(`web server listening on port ${config.webServer.port}`); // ` Concatena variables
    }); // Servidor en el puerto 3000, y realiza la función correspondiente
        
});
console.log('reading config file');