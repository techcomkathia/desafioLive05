const JWT = require('jsonwebtoken');

const info = {id:1, nome:'Kathia', email:'Kathia@kathia'};

const chaveSecreta = 'segredo';
try{
    // codificando o token que vai ser composto por header, payload e assinatura
    const token = JWT.sign(info, chaveSecreta, {expiresIn: '1h'});
    console.log(token);

    // decodificando o token
    const decodificado = JWT.verify(token, 'segredoErrado');
    console.log(decodificado);
}
catch(e){
    console.log('Erro ao trabalhar com JWT');
    console.log(e.message);
}


// crie uma função que recebe um token, a chave secreta e retorna o payload do token
// 