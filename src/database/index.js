const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { Animal } = require('./models/animais');
const { Entrada } = require('./models/entrada');
const { Movimentacao } = require('./models/movimentacao');
const { Pasto } =  require('./models/pastos');
const { User } = require('./models/user');

const database = new Sequelize(configDatabase);


module.exports = database;
