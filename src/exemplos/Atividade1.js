// crie uma função que recebe um token, a chave secreta e retorna o payload do token

const JWT = require('jsonwebtoken');

function login(token, chaveSecreta){
    try{
        const tokenDecodificado = JWT.verify(token, chaveSecreta);
        return tokenDecodificado;
    }
    catch(e){
        console.log('Erro ao trabalhar com JWT');
        console.log(e.message);
        return null;
    }
   
}

console.log(login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6IkthdGhpYSIsImVtYWlsIjoiS2F0aGlhQGthdGhpYSIsImlhdCI6MTc0NTk2NjY5NiwiZXhwIjoxNzQ1OTcwMjk2fQ.OHI79ON21DnpO9fs_BIpA5jdd3gmxxVhjnmKs9FO-0A','SEGREDO')) //erro

console.log(login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6IkthdGhpYSIsImVtYWlsIjoiS2F0aGlhQGthdGhpYSIsImlhdCI6MTc0NTk2NjY5NiwiZXhwIjoxNzQ1OTcwMjk2fQ.OHI79ON21DnpO9fs_BIpA5jdd3gmxxVhjnmKs9FO-0A','segredo'))

console.log(login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6IkthdGhpYSIsImVtYWlsIjoiS2F0aGlhQGthdGhpYSIsImlhdCI6MTc0NTk2ODQ3Nn0.K4_7OLwisTD_cXD_bz4s26ehfzx5TCOWbsXVxjMGnOE','segredo'))