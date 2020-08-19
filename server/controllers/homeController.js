//importo los modelos:
const Viaje = require("../models/Viajes");
//testimoniales:
const Testimonial = require("../models/Testimoniales");
exports.consultasHomePage = async (req, res) => {
  //puedo utilizar async/await para hacer varias consultas a la vista al mismo tiempo, asi:
  const viajes = await Viaje.findAll({ limit: 3 });
  const testimoniales = await Testimonial.findAll({ limit: 3 });
  res.render("index", {
    pagina: "Próximos Viajes",
    clase: "home",
    viajes,
    testimoniales,
  });
};
