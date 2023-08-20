const { DataTypes } = require('sequelize');
const sequelize = require('../config');  // Configure this to your database connection
module.exports = (DataTypes , sequelize) => {
const Pasto = sequelize.define('Pasto', {
  id_pasto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_pasto: {
    type: DataTypes.STRING,
  },
  capacidade: {
    type: DataTypes.INTEGER,
  },
});
}

