# 📠 Pdv API

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

## ⚙️ Como executar
### Requisitos

- [Node.js](https://nodejs.org/en/download/current) instalado
- [Git](https://git-scm.com/downloads) instalado

### Como instalar
1. Clone este repositório para qualquer pasta de sua preferência:
    ```bash
    git clone git@github.com:brenoww/pdv-API.git
    ```

2. Abra seu terminal na pasta do repositório e digite:

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




  


  
