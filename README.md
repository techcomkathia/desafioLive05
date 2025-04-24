# Desafio Live 05 — API com Express e Sequelize

## 🎯 Desafio

A partir do SQL de criação do banco de dados e tabela, do modelo Sequelize e da configuração da conexão com o banco, **você deve criar as rotas para:**

- `GET /usuarios`: retornar todos os usuários cadastrados.
- `POST /usuarios`: cadastrar um novo usuário no banco de dados.

---

## 🛠 Banco de Dados

### Banco: `desafioLive05`
### Tabela: `usuarios`

```sql
CREATE DATABASE IF NOT EXISTS desafioLive05;
USE desafioLive05;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);
```

---

## 🗂 Estrutura do Projeto

```
project-root/
├── src/
│   ├── config/               # Configurações gerais (ex: Sequelize, variáveis de ambiente)
│   │   └── database.js
│   ├── controllers/          # Lógica que lida com requisições e respostas
│   │   └── usuarioController.js
│   ├── services/             # Lógica de negócio (intermediária entre controller e model)
│   │   └── usuarioService.js
│   ├── models/               # Models do Sequelize
│   │   └── usuario.js
│   ├── routes/               # Definições de rotas da aplicação
│   │   └── usuarioRoutes.js
│   ├── app.js                # Arquivo principal da aplicação (Express)
├── .gitignore
├── package.json
└── README.md
```

---

## 🔍 Explicações das Camadas

| Pasta / Arquivo      | Descrição |
|----------------------|-----------|
| `src/models/`        | Contém os models do Sequelize que representam as tabelas do banco de dados. |
| `src/controllers/`   | Responsável por lidar com as requisições HTTP (recebe os dados da rota e envia a resposta). |
| `src/services/`      | Onde fica a lógica de negócio, intermediando entre controller e model. |
| `src/routes/`        | Define as rotas da aplicação e conecta com os controllers. |
| `src/config/`        | Configurações gerais da aplicação, como a conexão com o banco de dados. |
| `app.js`             | Arquivo principal que instancia o Express, aplica os middlewares e carrega as rotas. Inicializa o servidor, autentica com o banco de dados e sincroniza os modelos |
---

## 🚀 Roteiro da Atividade

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
5. Garanta que o banco de dados foi criado e que o servidor do MySQL está ativo. 
4. Faça as correções no arquivo de configuração do Banco.
5. Crie dos serviços (src/services/)
6. Configure o controlador (src/controllers/)
7. Defina as rotas para a aplicação
8. Configure o arquivo principal (app.js) para lidar com as rotas, estabelecer a conexão com o banco de dados e definir a porta para o servidor. 
5. Inicie o servidor:
   ```bash
   npm start
   ```
---

## ✅ Objetivo Final

Após a configuração e criação das rotas:

- Acesse `GET http://localhost:3000/usuarios` para listar os usuários.
- Envie um `POST` com `nome`, `email` e `senha` para `http://localhost:3000/usuarios` para cadastrar um novo usuário.

---

### Boa sorte! 🚀
