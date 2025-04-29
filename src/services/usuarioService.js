const usuario = require('../models/usuarioModel');

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

// funcao logar (email, senha)

module.exports = {
    buscarTodosUsuarios,
    criarUsuario
}