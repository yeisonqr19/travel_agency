const sequelize = require("sequelize");
require("dotenv").config({ path: "variables.env" });

//para utilizar las variables de entorno hago lo siguiente:
module.exports = new sequelize(
  process.env.BD_NOMBRE,
  process.env.BD_USER,
  process.env.BD_PASS,

  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "mariadb",
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    operatorsAliases: false,
  }
);
