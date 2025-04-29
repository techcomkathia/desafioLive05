function middlewerExemplo(req, res, next){
    const {nome} = req.body || {};
    if(!nome){
        console.log('No corpo da requisição não foi informado nenhuma informação para o campo nome');
    }
    else(
        console.log(`O campo nome foi preenchido com o valor ${nome}`)
    )
    console.log('Executado o middlewerExemplo');
    console.log('As informações serão passadas o próximo passo');
    next();
}

module.exports = middlewerExemplo