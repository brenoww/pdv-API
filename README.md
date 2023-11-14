# :fax: Pdv API

Esta é uma **API RESTful** do sistema de um ponto de vendas (pdv) completa, desenvolvida com base em **Javascript**, **Express.js** e **Node.js** que foi estruturada para sanar a demanda de um sistema que pudesse gerenciar e armazenar produtos e pedidos efetuados, dados de usuarios (funcionários) e cadastro de clientes de maneira rápida, eficiente e com qualidade.

Encontraremos aqui todas as informações necessárias para compreender seu funcionamento, capacitar a utilização da API disponibilizada e detalhar suas especificações técnicas.

## :hammer_and_wrench: Bibliotecas e Tecnologias

### Bibliotecas utilizadas:
- **📋 Dotenv**
  - Módulo para armazenamento e leitura de variáveis de ambiente
  - Dados sensíveis do sistema
  
- **📲 Cors**
  - Habilitar o consumo da API por outras origens
 
- **✅ JOI**
  - Validação de Dados

- **🛢️ Knex.js**
  - Conexão SQL
  - Query Building
    
- **🔐 Bcrypt**
  - Encriptação e decodificação de dados sensíveis para cadastro no sistema
 
- **🔑 Json Web Token - JWT**
  - Geração e Validação de Tokens de acesso ao sistema
 
- **🌐 AWS-SDK**
  - Conexão, armazenamento e leitura de dados em Buckets

- **📑 Multer**
  - Habilitar o uso e captura de dados em Multipart/Form-Data

- **📧 Nodemailer**
  - Envio automatizado de e-mails
##
### Tecnologias utilizdas:
- Npm
- Node.js 
- Express
  - Framework base para estruturação do sistema de rotas e comunicação da API
 
- PG (Postgres)
  - PostegresSQL Client

    > _Pode ser substituído pelo client SQL de sua preferência_
    
 
## Requisitos

- NPM instalado
- Node.js instalado

## Como Instalar
- Clone o repositório para qualquer pasta de sua preferência
- Abra seu terminal na pasta do repositório e digite:
```
npm install
```

Após a instalação ser efetuada, configure seu arquivo **.env**:

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
SENHA_JWT= Sua_Chave_Para_Tokens

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





  


  
