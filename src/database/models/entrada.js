const { DataTypes } = require('sequelize');
const sequelize = require('../config'); /// Configure this to your database connection
module.exports = (DataTypes , sequelize) => {
const Entrada = sequelize.define('Entrada', {
  id_entrada: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_animal: {
    type: DataTypes.INTEGER,
  },
  id_pasto_entrada: {
    type: DataTypes.INTEGER,
  },
  quantidade: {
    type: DataTypes.INTEGER,
  },
});
}

