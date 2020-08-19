const Testimonial = require("../models/Testimoniales");

exports.mostrarTestimoniales = async (req, res) => {
  //aqui estoy mostrando todos los testimonios que hay en la BD
  const testimoniales = await Testimonial.findAll();
  res.render("testimoniales", {
    pagina: "testimoniales",
    testimoniales,
  });
};

exports.agregarTestimonial = async (req, res) => {
  //voy a validar que el usuario lleno todos los campos del formulario:

  //aqui desestructuro el objeto que obtengo de req.body, y obtengo este objeto gracias a bodyParser
  let { nombre, correo, mensaje } = req.body;
  let errores = [];
  if (!nombre) {
    errores.push({ mensaje: "agrega tu nombre" });
  }

  if (!correo) {
    errores.push({ mensaje: "Agrega tu Correo" });
  }

  if (!mensaje) {
    errores.push({ mensaje: "Debes agregar un Mensaje" });
  }

  //reviso para ver si hay errores:
  if (errores.length > 0) {
    //muestra en el template que hay un error:
    //aqui estoy renderizando de nuevo testimoniales:
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      errores,
      nombre,
      correo,
      mensaje,
      pagina: "Testimoniales",
      testimoniales,
    });
  } else {
    //si no se cumple lo anterior, significa que no hay errores ,por lo cual lo almaceno en la base de datos:
    Testimonial.create({
      nombre,
      correo,
      mensaje,
    })
      .then((testimonial) => res.redirect("/testimoniales"))
      .catch((error) => console.log(error));
  }
};
