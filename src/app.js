const express = require('express');
const sequelize = require('./config/bancoDados');
const app = express();
const rotasUsuarios = require('./routes/usuarioRoutes');
const middlewerExemplo = require('./middlewer/middlewerExemplo');
const usuarioController = require('./controllers/usuarioController');

app.use(express.json());


// configuração para o app usar o arquivo rota de usuarios

app.get('/', (req, res) => {
  res.send('Rota principal');
});

//dar acesso as rotas de usuarios
app.use('/usuarios', rotasUsuarios);

//ROTA DE LOGIN
app.post('/login', usuarioController.logar);

// configuração para sincronizar o banco de dados e iniciar o servidor
sequelize.sync({ alter: true }) // alter: true para atualizar as tabelas, caso elas tenham sido alteradas
  .then(() => {
    console.log('Banco de dados sincronizado!');
    // Iniciar o servidor
    const PORTA = 3000;
    app.listen(PORTA, () => {
      console.log(`Servidor rodando na porta ${PORTA} http://localhost:${PORTA}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco:', err);
})

// app.listen(3000, () => {
//     console.log('Servidor em http://localhost:3000/');
// });

