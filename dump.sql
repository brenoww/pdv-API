-- Passo 1: Remover tabelas caso existam

DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS categorias;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS pedidos;

-- Passo 2: Criar novas tabelas

CREATE TABLE usuarios(
  id SERIAL PRIMARY KEY,
  nome TEXT,
  email TEXT UNIQUE,
  senha TEXT
);

CREATE TABLE categorias(
  id SERIAL PRIMARY KEY,
  descricao TEXT
);

CREATE TABLE produtos(
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(250) NOT NULL,
  quantidade_estoque INT NOT NULL,
  valor INT NOT NULL,
  categoria_id INT REFERENCES categorias(id),
  produto_imagem TEXT;
);

CREATE TABLE clientes(
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL ,
  email TEXT NOT NULL UNIQUE,
  cpf TEXT NOT NULL UNIQUE,
  cep TEXT,
  rua TEXT,
  numero INT,
  bairro TEXT,
  cidade TEXT,
  estado TEXT
);

create table pedidos (
	id serial primary key,
  cliente_id integer references clientes(id) not null,
  observacao text,
  valor_total integer
);
  
create table pedido_produtos(
  id serial primary key,
  pedido_id integer references pedidos(id) not null,
  produto_id integer references produtos(id) not null,
  valor_produto integer not null
);

-- Passo 3: Cadastrar categorias

INSERT INTO categorias (descricao)
VALUES
('Informática'),
('Celulares'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games');  