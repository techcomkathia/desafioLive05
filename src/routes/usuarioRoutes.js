const usuarioController = require('../controllers/usuarioController');
const express = require('express');
const middlewerExemplo = require('../middlewer/middlewerExemplo');

const rotasUsuario = express.Router();

rotasUsuario.get('/',middlewerExemplo, usuarioController.buscarTodosUsuarios);

rotasUsuario.post('/', usuarioController.criarUsuario);

module.exports = rotasUsuario;