const usuarioService = require('../services/usuarioService');

async function buscarTodosUsuarios(req, res) {
    try{
        let todosUsuarios = await usuarioService.buscarTodosUsuarios();
        //configuração da resposta
        res.status(200).json(todosUsuarios);
    }
    catch{
        res.status(500).json({erro: "Erro ao buscar todos os usuarios"});
    }
}

async function criarUsuario(req, res) {
    try{
        const{nome,email,senha} = req.body;

        if(!nome || !email || !senha){
            return res.status(400).json({erro: "Todos os campos devem ser preenchidos"});
        }

        let novoUsuario = await usuarioService.criarUsuario(nome, email, senha);

        res.status(200).json({mensagem: "Usuário criado com sucesso", data: novoUsuario});

    }
    catch{
        res.status(500).json({erro: "Erro ao criar usuário"});
    }
}

module.exports = {
    buscarTodosUsuarios,
    criarUsuario
}