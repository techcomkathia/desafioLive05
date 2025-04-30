const usuario = require('../models/usuarioModel');
const JWT = require('jsonwebtoken');

function buscarTodosUsuarios() {
    return usuario.findAll();
}


function criarUsuario(nome, email, senha) {

    // um usuário só pode ser criado ser o email seja unico
    let usuarioExiste= usuario.findOne({where:{email:email}});

    if(usuarioExiste){
        return {erro: "Email ja cadastrado"};
    }

    let novoUsuario = usuario.create({nome:nome,email:email,senha:senha});
    return novoUsuario;

}

// função buscarUmUsuario (email)
function buscarUmUsuario(email) {
    return usuario.findOne({where:{email:email}});
}

// funcao logar (email, senha)
async function logarUsuario(email, senha) {
    const usuario = await buscarUmUsuario(email);
    
    if(!usuario){
        return {erro: "Email nao cadastrado"};
    }

    if(senha != usuario.senha){
        return {erro: "Email ou senha incorretos"};
    }

    return usuario;

}

function gerarToken(usuario) {
    const token = JWT.sign({nome: usuario.nome, email: usuario.email}, 'segredo', {expiresIn: '1h'});
    return token;
}

module.exports = {
    buscarTodosUsuarios,
    criarUsuario,
    logarUsuario,
    buscarUmUsuario,
    gerarToken
}