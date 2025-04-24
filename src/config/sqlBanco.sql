-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS desafioLive05;
USE desafioLive05;

-- Criação da tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


INSERT INTO usuarios (id, nome, email, senha, createdAt, updatedAt) VALUES
(1, 'Ana Costa', 'ana.costa@email.com', 'senha123', '2025-04-24 10:00:00', '2025-04-24 10:00:00'),
(2, 'Bruno Silva', 'bruno.silva@email.com', 'senha123', '2025-04-24 10:01:00', '2025-04-24 10:01:00'),
(3, 'Carlos Lima', 'carlos.lima@email.com', 'senha123', '2025-04-24 10:02:00', '2025-04-24 10:02:00'),
(4, 'Daniela Rocha', 'daniela.rocha@email.com', 'senha123', '2025-04-24 10:03:00', '2025-04-24 10:03:00'),
(5, 'Eduardo Neves', 'eduardo.neves@email.com', 'senha123', '2025-04-24 10:04:00', '2025-04-24 10:04:00'),
(6, 'Fernanda Souza', 'fernanda.souza@email.com', 'senha123', '2025-04-24 10:05:00', '2025-04-24 10:05:00'),
(7, 'Gabriel Monteiro', 'gabriel.monteiro@email.com', 'senha123', '2025-04-24 10:06:00', '2025-04-24 10:06:00'),
(8, 'Helena Dias', 'helena.dias@email.com', 'senha123', '2025-04-24 10:07:00', '2025-04-24 10:07:00'),
(9, 'Igor Martins', 'igor.martins@email.com', 'senha123', '2025-04-24 10:08:00', '2025-04-24 10:08:00'),
(10, 'Juliana Ramos', 'juliana.ramos@email.com', 'senha123', '2025-04-24 10:09:00', '2025-04-24 10:09:00');
