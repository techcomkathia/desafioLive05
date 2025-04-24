const { Sequelize } = require('sequelize');

// Criando a conexão com o banco de dados
// substitua com suas configurações
const sequelize = new Sequelize('', '', '', {}); 


// Exportando a conexão e o modelo
module.exports = sequelize
