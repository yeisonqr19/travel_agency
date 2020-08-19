const sequelize = require("sequelize");
const db = require("../config/database");

//aqui defino el modelo:
const Viaje = db.define("viaje", {
  titulo: {
    type: sequelize.STRING,
  },
  precio: {
    type: sequelize.STRING,
  },
  fecha_ida: {
    type: sequelize.DATE,
  },
  fecha_vuelta: {
    type: sequelize.DATE,
  },
  imagen: {
    type: sequelize.STRING,
  },
  descripcion: {
    type: sequelize.STRING,
  },
  disponibles: {
    type: sequelize.STRING,
  },
});

module.exports = Viaje;
