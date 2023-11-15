# 📠 Pdv API

## 📂 Sobre o Projeto

Esta é uma **API RESTful** do sistema de um ponto de vendas (pdv) completa, desenvolvida com base em **Javascript**, **Express.js** e **Node.js** que foi estruturada para sanar a demanda de um sistema que pudesse gerenciar e armazenar produtos e pedidos efetuados, dados de usuarios (funcionários) e cadastro de clientes de maneira rápida, eficiente e com qualidade.

Encontraremos aqui todas as informações necessárias para compreender seu funcionamento, capacitar a utilização da API disponibilizada e detalhar suas especificações técnicas.

## 🕹️ Funcionalidades

A API conta com inúmeras funcionalidades para Usuarios, Clientes, Pedidos e Produtos. Segue a lista abaixo:

Usuários
- [x] Cadastrar Usuário
- [X] Fazer Login
- [x] Editar Perfil do Usuário
- [x] Detalhar Perfil do Usuário

Produtos
- [x] Cadastrar Produto
- [x] Detalhar Produto
- [x] Listar Produtos
- [x] Editar Produto
- [x] Excluir Produto
      
Clientes
- [x] Cadastrar Cliente
- [x] Detalhar Cliente
- [x] Editar Cliente
- [x] Listar Clientes
      
Pedidos
- [x] Cadastrar Pedido
- [x] Listar Pedido
      
Categorias
- [x] Listar Categorias


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
O endpoint principal será onde sua API se encontra, seja o endpoint criado no deploy: Ex.: `https://brave-lion-raincoat.cyclic.app/` - **Cyclic**, ou o endpoint local: `htttp://localhost:3000`.

A API está quase pronta para ser testada e utilizada! 
<br><br>

> [!IMPORTANT]
> ***Caso queira fazer uso desta API remotamente, basta dar deploy em algum serviço de deploy de APIs (Ex.: Cyclic, etc.) e configurar suas variáveis de ambiente nas configurações do seu deploy!***
<br>

## 🛢️ Estruturação do Banco de Dados

Para finalizar, antes de utilizar das funcionalidades da API, é necessário que seu banco de dados esteja estruturado para receber as informações e alterações corretamente. Para isso, conecte-se ao banco utilizando algum Database Manager (Ex.: Beekeeper Studio, etc.) e execute o dump SQL escrito no arquivo `./pdv-API/dump.sql`, seguindo passo a passo.

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
  	nome TEXT NOT NULL,
  	email TEXT NOT NULL UNIQUE,
  	senha TEXT NOT NULL
);

CREATE TABLE categorias(
  	id SERIAL PRIMARY KEY,
  	descricao TEXT NOT NULL
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
	id SERIAL PRIMARY KEY,
	cliente_id INTEGER REFERENCES clientes(id) NOT NULL,
  	observacao TEXT,
  	valor_total INTEGER
);
		  
create table pedido_produtos(
  	id SERIAL PRIMARY KEY,
  	pedido_id INTEGER REFERENCES pedidos(id) NOT NULL,
  	produto_id INTEGER REFERENCES produtos(id) NOT NULL,
  	valor_produto INTEGER NOT NULL
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

## 📌 Endpoints

### Cadastrar Usuário:

**[POST]** `/usuario`

- Ao acessar esta rota, passando o seguinte JSON no corpo da requisição (body), será cadastrado um usuário no sistema:


	Request Body
	```json		 	 
	{
 	  "nome": "Nome Exemplo",
 	  "email": "exemplo@email.com",
 	  "senha": "exemplo"
	}
	```

 	Response Body
	```js
 	//Status Code: 201 Created
 	//Sem resposta no corpo		 
	```
 
### Fazer Login:

**[POST]** `/login`

- Ao acessar esta rota, passando o seguinte JSON no corpo da requisição (body), o login será efetuado e o sistema retornará as seguintes informações:

	Request Body
	```json
 	{
 	  "email": "exemplo@email.com",
 	  "senha": "exemplo"
 	}
	```

 	Response Body
  
	```json		 	 
	{
 	  "usuario": {
 	     "id": "1",
 	     "email": "exemplo@email.com"
 	  },
 	  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
	}
	```
 	```js
  //Status Code: 200 OK
	```
##
> [!WARNING]
> Apartir daqui **TODAS** as rotas requerem o token de login como Bearer Token
##
### Detalhar Perfil do Usuário:

**[GET]** `/usuario`

- Ao acessar esta rota, resgatando o id pela validação do login, o sistema retornará as seguintes informações do usuário logado:
	Request Body
	```js
 	//Sem corpo de requisição
	```

 	Response Body  
	```json		 	 
	{
 	  "id": "1",
	  "nome": "Nome Exemplo"
 	  "email": "exemplo@email.com"
 	}
	```
 	```js
  //Status Code: 200 OK
	```

### Atualizar Usuário:

**[PUT]** `/usuario`

- Ao acessar esta rota, resgatando o id pela validação do login e passando o seguinte JSON no corpo da requisição, o sistema atualizará os dados do usuario e retornará as seguintes informações:
	Request Body
	```json
 	{
 	  "nome": "Nome Completo Exemplo",
 	  "email": "exemplo2@email.com",
 	  "senha": "nova_senha_exemplo"
	}
	```

 	Response Body
  ```js  
  //Status Code: 201 Created
  //Sem resposta no corpo
	```
### Cadastrar Produto:

**[POST]** `/produto`

- Ao acessar esta rota, passando o seguinte JSON em uma variável **"dados_produto"** de tipo **multiline-text** e um arquivo de imagem (opcional) em uma variável **"imagem_produto"** como Multipart-Form/Data, como no exemplo abaixo, o sistema cadastrará o produto e retornará as seguintes informações:

	Exemplo: ![Exemplo-Cadastro-Produto]()	

	Request Body
	```json
	{
 	  "dados_produto": {
 	     "descricao": "produto-exemplo",
	     "quantidade_estoque": 10,
	     "valor": 1000,
 	     "categoria_id": 1
 	  }
	}
	```

	Request Files
	```json
	{
 	  "imagem_produto": [
	     {
 	       "originalname": "produto-exemplo",
	       "buffer": "< image-buffer >",
	       "size": 321321,
 	       "mimetype": "image/png"
 	     }
	  ]
	}
	```

 	Response Body
  ```json
	{
		"id": 1,
		"descricao": "produto-exemplo",
		"quantidade_estoque": 10,
		"valor": 1000,
		"categoria_id": 1,
		"produto_imagem": "https://bucket.endpoint.com/imagens/produto/1/filename.png"
	}
  ```
  ```js  
  //Status Code: 201 Created  
	```

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


  


  
