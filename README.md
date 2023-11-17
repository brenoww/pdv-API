# 📠 Pdv API

<p align="center">
	<img alt="API version" src='https://img.shields.io/badge/version-1.0.0-blue'>	
	<img alt="Repository size" src="https://img.shields.io/github/repo-size/brenoww/pdv-API">
	<img alt="GitHub lang count" src="https://img.shields.io/github/languages/count/brenoww/pdv-API?color=%2304D361">
	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brenoww/pdv-API">
	<a href="https://github.com/brenoww">
		<img alt="Feito por Breno Villas Boas" src="https://img.shields.io/badge/feito-por%20Breno%20Villas%20Boas-D818A5?style=social">
	</a>   
	<a href="https://github.com/brenoww/pdv_API/stargazers">
		<img alt="Stargazers" src="https://img.shields.io/github/stars/brenoww/pdv-API?style=social">
	</a>
</p>

[Sobre](#-sobre-o-projeto) •
[Bibliotecas e Tecnologias](#bibliotecas-e-tecnologias) •
[Funcionalidades](#%EF%B8%8F-funcionalidades) •
[Como Executar](#-como-executar) •
[Endpoints da API](#-endpoints-da-api) •
[Implementações Futuras](#-implementações-futuras) •
[Referências](#-referências) •
[Contribuidores](#-contribuidores)
## 📂 Sobre o Projeto

<p align='justify'>
	Esta é uma <b>API RESTful</b> do sistema de um ponto de vendas (pdv) completa, desenvolvida com base em <b>Javascript</b>, <b>Express.js</b> e <b>Node.js</b>,  que dispõe de serviços de gerenciamento e armazenamento de produtos e pedidos efetuados, dados de 					usuarios (funcionários) e cadastro de clientes de maneira rápida, eficiente e com qualidade, fundamentada em operações <b>CRUD</b> e nos princípios <b>SOLID</b>.<br><br>
	Todas as informações necessárias para compreender seu funcionamento e capacitar a utilização da API estão disponibilizadas e detalhadas abaixo, juntamente com suas especificações técnicas.
</p>

## 🛠️ Bibliotecas e Tecnologias
### Tecnologias utilizdas:
<div>
	<img align='center' height='50' src='https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'> 
	<img align='center' height='55' src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'> 
	<img align='center' height='55' src='https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png'>  
	<img align='center' height='55' src='https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png'>
	<img align='center' height='55' src='https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png'> &nbsp;
	<img align='center' height='50' src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'> &nbsp;
	<img align='center' height='60' src='https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png'> &nbsp;
</div>

### Bibliotecas utilizadas:
<div>	
	<img align='center' height='53' width='49' title='Nodemon' alt='nodemon' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/fd586348-7781-4e02-a4f0-fe7410ef43fb' />
	<img align='center' height='75' width='70' title='AWS-SDK' alt='aws-sdk' src="https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/SDKs_copy_nodeJS-512.png">
	<img align='center' height='65' width='65' title='JWT' alt='jwt' src="https://media.licdn.com/dms/image/D4D12AQHW9aRSWIOMxQ/article-cover_image-shrink_600_2000/0/1657421703592?e=2147483647&v=beta&t=nKygyfSDFwgPdEoC-nEkogMS0527SBa8z8D_FqUr-us"> 
	<img align='center' height='55' title='Knex.js' alt='knex.js' src="https://static-00.iconduck.com/assets.00/knex-js-icon-512x512-a2yn0209.png"> &nbsp;
	<img align='center' height='60' width='63' title='Nodemailer' alt='nodemailer' src="https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1"> &nbsp;
	<img align='center' height='48' width='48' title='Dotenv' alt='dotenv' src="https://res.cloudinary.com/dg2dgzbt4/image/upload/v1587070177/external_assets/open_source/icons/dotenv.png"> &nbsp;
	<img align='center' height='48' width='48' title='Cors' alt='cors' src="https://lh3.googleusercontent.com/hvYImHDFeqlR-EDeOW-8PTNwz5RBau0HG0uvW8nZJjphuN3VNk3tJzutC1zrD2b7RdBf7TJILMOUYFwOP8mBTArHsg=w128-h128-e365-rj-sc0x00ffffff"> &nbsp;
	<img align='center' height='48' title='Bcrypt' alt='bcrypt' src="https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGU30LWO2YUXQtIYwJY_Ac_c=/bcryptnet-2023-01-04%2000-00-00-2023-06-23%2016-23-53"> &nbsp;	
</div>

Outras:
- ✅ JOI
- 📑 Multer
  
  

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
<br>

> [!WARNING]
> Apartir daqui **TODAS** as rotas requerem o token de login como Bearer Token

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

- Ao acessar esta rota, passando o seguinte JSON em uma variável **"dados_produto"** de tipo **multiline-text** e um arquivo de imagem (opcional) em uma variável **"imagem_produto"**, como um Multipart-Form/Data, como no exemplo abaixo, o sistema cadastrará o produto e retornará as seguintes informações:

	Exemplo:

	![Exemplo-Cadastro-Produto](https://raw.githubusercontent.com/brenoww/images-backup/main/pdv-api/Exemplo-Cadastro-Produto.png)	

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
   ```js  
  //Status Code: 201 Created
  //Sem resposta no corpo
	```
  
### Detalhar Produto:

**[GET]** `/produto/:id`

- Ao acessar esta rota, passando um **ID** válido como um params na URL, o sistema detalhará o produto, retornando as seguintes informações:

	Request Body
	```js
 	//Sem corpo de requisição
	```

 	Response Body
  ```json
	{
		"id": 1,
		"descricao": "produto-exemplo",
		"quantidade_estoque": 10,
		"valor": 1000,
		"categoria_id": 1,
		"produto_imagem": "https://bucket.endpoint.com/imagens/produto/id/filename.png"
	}
  ```
  ```js  
  //Status Code: 200 OK  
	```
  
### Listar Produtos:

**[GET]** `/produto`

- Ao acessar esta rota, o sistema detalhará todos produtos cadastrados, retornando as seguintes informações:
- *O detalhamento pode ser filtrado pela categoria, declarando um query params `?cateogoria_id="id"` no fim da URL. Ex.: `/produto?cateogoria_id="1"`

	Request Body
	```js
 	//Sem corpo de requisição
	```

 	Response Body
  ```json
	{
		"id": 1,
		"descricao": "produto-exemplo",
		"quantidade_estoque": 10,
		"valor": 1000,
		"categoria_id": 1,
		"produto_imagem": "https://bucket.endpoint.com/imagens/produto/id/filename.png"
	}
  ```
  ```js  
  //Status Code: 200 OK  
	```
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


  


  
