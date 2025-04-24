const { Sequelize } = require('sequelize');

// Criando a conexão com o banco de dados
const sequelize = new Sequelize('desafioLive05', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
}); //substitua com suas configurações

// Importando o modelo Usuario
const Usuario = require('../models/usuario');

// Exportando a conexão e o modelo
module.exports = sequelize
