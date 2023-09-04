/*rutas de form
Rutas /api/form*/

const express = require("express");
require("dotenv").config();
const cors = require("cors");

//Crear el serviodor
const app = express();

//Cors
app.use(cors());

//lectura y parseo del body
app.use(express.json());

//disctorio publico
app.use(express.static("public"));

//Ruta
app.use("/api/form", require("./routes/form"));

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
