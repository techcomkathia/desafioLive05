const usuarioController = require('../controllers/usuarioController');
const express = require('express');

const rotasUsuario = express.Router();

rotasUsuario.get('/', usuarioController.buscarTodosUsuarios);

rotasUsuario.post('/', usuarioController.criarUsuario);

module.exports = rotasUsuario;