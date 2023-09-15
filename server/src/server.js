const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

//*INSTANCIA DE EXPRESS PARA CREAR EL SERVIDOR
const server = express();

//*MIDDLEWARES
server.use(cors());               //mecanismo de seguridad para el intercambio de recursos en la web
server.use(express.json());       //para que el servidor pueda leer el formato json
server.use(morgan("dev"));        //info en consola de las peticiones al servidor
server.use(router);

module.exports = server;
