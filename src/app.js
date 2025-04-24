const express = require('express');
const sequelize = require('./config/bancoDados');
const app = express();

app.use(express.json());

// configuração para o app usar o arquivo rota de usuarios




// configuração para sincronizar o banco de dados e iniciar o servidor
sequelize.sync({ alter: true }) // alter: true para atualizar as tabelas, caso elas tenham sido alteradas
  .then(() => {
    console.log('Banco de dados sincronizado!');
    // Iniciar o servidor
    const PORTA = 3000;
    app.listen(PORTA, () => {
      console.log(`Servidor rodando na porta ${PORTA}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco:', err);
})

