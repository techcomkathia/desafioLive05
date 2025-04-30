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

// função logar(req, res):

async function logar(req, res){

    try{
        const {email, senha} = req.body;
        console.log(email, senha);
        

        if(!email || !senha){
            return res.status(400).json({erro: "Email e senha devem ser preenchidos"});
        }

        const usuarioCadastrado = await usuarioService.logarUsuario(email, senha);
        console.log(usuarioCadastrado);

        if(usuarioCadastrado.erro){
            return res.status(401).json({erro: usuarioCadastrado.erro});
        }

        const token = usuarioService.gerarToken(usuarioCadastrado);

        res.status(200).json({mensagem: "Usuário logado com sucesso", data: token});

    }
    catch{
        res.status(500).json({erro: "Erro ao logar usuário"});
    }

}

// 401 - {erro: "Email não cadastrado"} (Quando o email nao existir no banco de dados)
// 401 - {erro: "Email ou senha incorretos"} (Quando o email existir no banco de dados, mas a senha for incorreta)
// 200 - {mensagem: "Usuário logado com sucesso", data: token} (Quando o email existir no banco de dados e a senha for correta)

module.exports = {
    buscarTodosUsuarios,
    criarUsuario,
    logar
}