const express = require("express");
const router = express.Router();
//importo los modelos:
const Viaje = require("../models/Viajes");
//testimoniales:
const Testimonial = require("../models/Testimoniales");

//Carga de Controladores:
const nosotrosController = require("../controllers/nosotrosController");
const homeController = require("../controllers/homeController");
const viajesController = require("../controllers/viajesController");
const testimonialesController = require("../controllers/testimonialesController");

//para exportar modulos hago:
module.exports = () => {
  //aqui estoy reaccionando o viendo es la pagina de inicio:
  router.get("/", homeController.consultasHomePage);
  //para reaccionar o ver la pagina de nosotros:
  router.get("/nosotros", nosotrosController.infoNosotros);
  //cargo la ruta de viajes:
  router.get("/viajes", viajesController.obtenerViajes);
  //rutas para los ids:
  router.get("/viajes/:id", viajesController.mostrarViaje);
  //para ver o renderizar la pagina de testimoniales:
  router.get("/testimoniales", testimonialesController.mostrarTestimoniales);
  //para renderizar el formulario que se encuentra en la pagina testimoniales:
  router.post("/testimoniales", testimonialesController.agregarTestimonial);

  return router;
};
