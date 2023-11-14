const express = require("express");

//controladores de usuario
const { atualizarUsuario, cadastrarUsuario, perfilUsuario, login } = require("../controladores/usuarios/index.js");
//middlewares
const validarDados = require("../intermediarios/validarDados");
const autenticarLogin = require("../intermediarios/autenticarLogin");

//utilitários
const dadosUsuario = require("../utilitarios/validacoes/dados_usuarios");
const dadosLogin = require("../utilitarios/validacoes/dados_login");

const usuario = express.Router();

//rotas
usuario.post("/usuario", validarDados({ body: dadosUsuario }), cadastrarUsuario);
usuario.post("/login", validarDados({ body: dadosLogin }), login);

usuario.use(autenticarLogin);

usuario.get("/usuario", perfilUsuario);
usuario.put("/usuario", validarDados({ body: dadosUsuario }), atualizarUsuario);

module.exports = usuario;
