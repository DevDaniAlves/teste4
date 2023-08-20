const { DataTypes } = require('sequelize');
const sequelize = require('../config');  // Configure this to your database connection
module.exports = (DataTypes , sequelize) => {
const Movimentacao = sequelize.define('Movimentacao', {
  id_movimentação: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pasto_entrada: {
    type: DataTypes.INTEGER,
  },
  id_pasto_saida: {
    type: DataTypes.INTEGER,
  },
  id_animal: {
    type: DataTypes.INTEGER,
  },
  quantidade_animais: {
    type: DataTypes.INTEGER,
  },
});
}

