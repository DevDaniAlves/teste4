const { DataTypes } = require('sequelize');
const sequelize = require('../config').sequelize; // Configure this to your database connection

module.exports = (DataTypes , sequelize) => {
const Animal = sequelize.define('Animal', {
  id_animal: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
});
}

