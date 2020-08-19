//importo los modelos:
const Viaje = require("../models/Viajes");

exports.obtenerViajes = async (req, res) => {
  //esto me traera todos los datos de la base de datos:
  const viajes = await Viaje.findAll();
  res.render("viajes", {
    pagina: "Proximós Viajes",
    viajes: viajes,
  });
};

//voy a colocar otro metodo, el cual mostrara toda la informacion de un solo viaje, cuando se le de click en el boton de mostrar mas informacion, asi:
exports.mostrarViaje = async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  res.render("viaje", {
    viaje: viaje,
  });
};
