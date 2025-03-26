//IMPORTS *
const express = require("express");
const cors = require("cors");
//const mysql = require('mysql2/promise'); importar el módulo de promesas de msql2

//CREAR SERVIDOR *
const server = express();

//CONFIGURAR SERVIDOR *
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');
require("dotenv").config();

//PUERTO *
const PORT = 5001; 
server.listen(PORT, ()=>{
  console.log(`Servidor corriendo por http://localhost:${PORT}`);
})

//ENDPOINTS
//rutas endpoints --> API
//GET, POST, PUT, DELETE








