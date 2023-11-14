# 📠 Pdv API

## 📂 Sobre o Projeto

Esta é uma **API RESTful** do sistema de um ponto de vendas (pdv) completa, desenvolvida com base em **Javascript**, **Express.js** e **Node.js** que foi estruturada para sanar a demanda de um sistema que pudesse gerenciar e armazenar produtos e pedidos efetuados, dados de usuarios (funcionários) e cadastro de clientes de maneira rápida, eficiente e com qualidade.

Encontraremos aqui todas as informações necessárias para compreender seu funcionamento, capacitar a utilização da API disponibilizada e detalhar suas especificações técnicas.

## 🛠️ Bibliotecas e Tecnologias

### Bibliotecas utilizadas:

- 📋 Dotenv  
- 📲 Cors
- ✅ JOI
- 🛢️ Knex.js    
- 🔐 Bcrypt 
- 🔑 Json Web Token - JWT 
- 🌐 AWS-SDK
- 📑 Multer
- 📧 Nodemailer
### Tecnologias utilizdas:

- Npm
- Node.js 
- Express
- PG (Postgres)
    > _Pode ser substituído pelo client SQL de sua preferência_

## ⚙️ Como Executar
### Requisitos

- [Node.js](https://nodejs.org/en/download/current) instalado
- [Git](https://git-scm.com/downloads) instalado

### Como instalar
1. Clone este repositório para qualquer pasta de sua preferência:
    ```bash
    git clone git@github.com:brenoww/pdv-API.git
    ```

2. Abra seu terminal na pasta do repositório e execute o comando:

    ```bash
    npm install
    ```

3. Após a instalação ser efetuada, crie e configure seu arquivo **.env** com base no .env.example:

    ```env
    # Porta para o Express
    PORT= Porta_Express (Ex.: 3000)

    # Dados de conexão com o Database
    DB_HOST= Host_Do_Databse
    DB_PORT= Porta_Do_Database
    DB_USER= User_Do_Database
    DB_PASS= Senha_Do_Database
    DB_NAME= Nome_Do_Database
    
    # Senha única para criação e autenticação de Tokens
    SENHA_JWT= Chave_Secreta_Para_Tokens
    
    # Dados de acesso ao seu bucket
    BUCKET_NAME= Nome_Do_Bucket
    KEY_ID= Id_Da_Chave
    KEY_NAME= Nome_Da_Chave
    APP_KEY= Senha_De_Acesso_Ao_Bucket
    ENDPOINT_S3= Endpoint_do_Bucket
    
    # Credenciais do Mailer
    MAIL_HOST= Host_Do_Mailer
    MAIL_PORT= Porta_Do_Mailer
    MAIL_USER= User_Do_Mailer
    MAIL_PASS= Senha_Do_Mailer
    MAIL_FROM= Email_Remetente_Do_Mailer
    ```

5. Com seu arquivo **.env** configurado, inicialize a API:

    ```bash
    npm run dev
    ```

Agora a API está pronta para ser testada e utilizada!

> [!IMPORTANT]
> ***Caso queira fazer uso desta API remotamente, basta dar deploy em algum serviço de deploy de APIs (Ex.: Cyclic, etc.) e configurar suas variáveis de ambiente nas configurações do seu deploy!***

## 🛢️ Estruturação do Banco de Dados

Antes de utilizar das funcionalidades da API, é necessário que seu banco de dados esteja estruturado para receber as informações e alterações corretamente. Para isso, conecte-se ao banco utilizando algum Database Manager (Ex.: Beekeeper Studio, etc.) e execute o dump SQL escrito no arquivo `./pdv-API/dump.sql`, seguindo passo a passo.

<details>
<summary><b>Dump Code:</b></summary>
    
```sql
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
```
</details>
 
  

## 📌 Endpoints

### Cadastrar Usuário:
### Fazer Login:
### Detalhar Usuário:
### Atualizar Usuário:
##
### Cadastrar Produto:
### Detalhar Produto:
### Listar Produtos:
### Editar Produto:
### Excluir Produto:
##
### Cadastrar Cliente:
### Detalhar Cliente:
### Listar Clientes:
### Editar Cliente:
##
### Listar Categorias:
## 
### Cadastrar Pedidos:
### Listar Pedidos:

## 👨🏻‍💻 Colaboradores


  


  
