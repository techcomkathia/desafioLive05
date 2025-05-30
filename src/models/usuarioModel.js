// Importando o Sequelize e o DataTypes
const banco = require('../config/bancoDados');
const { DataTypes } = require('sequelize');

// Definindo o modelo Usuario diretamente
const Usuario = banco.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: true // createdAt e updatedAt automáticos
});

// Exportando o modelo Usuario
module.exports = Usuario;