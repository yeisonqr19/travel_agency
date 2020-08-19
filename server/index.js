//IMPORTAR EXPRESS:
const express = require("express");
//importo mis rutas:
const routes = require("./routes");
//importo path:
const path = require("path");
//voy a importar body parser:
const bodyParser = require("body-parser");
//importo los configs:
const configs = require("./config");
//voy a utilizar las variables de entorno:
require("dotenv").config({ path: "variables.env" });

//CONFIGURAR EXPRESS:
const app = express();

//habilitar pug:
app.set("view engine", "pug");

//le indico a node donde estan las vistas:
app.set("views", path.join(__dirname, "./views"));

//cargo las Carpetas estaticas, que se encuentran en public:
app.use(express.static("public"));

//voy a validar si estoy en desarrollo o en produccion:
const config = configs[app.get("env")];

//creo una variable para el sitio web:
app.locals.titulo = config.nombresitio;

//Muestra el año actual:
app.use((req, res, next) => {
  //creo una nueva fecha:
  const fecha = new Date();
  //creo una variable locals, asi:
  res.locals.fechaActual = fecha.getFullYear();
  return next();
});

//creo una nueva variable para detectar la pestaña en la que se encuentra el usuario:
app.use((req, res, next) => {
  //creo una variable locasl:
  res.locals.ruta = req.path;
  return next();
});

//voy a cargar bodyParser:
app.use(bodyParser.urlencoded({ extended: true }));

//cargo las rutas:
app.use("/", routes());

//para indicar el puerto:
/**Puerto y Host para la App: */
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
  console.log("el Servidor esta Funcionando");
});
