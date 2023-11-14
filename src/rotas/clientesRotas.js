const express = require("express");

//controladores de cliente
const { cadastrarCliente, editarCliente, detalharCliente, listarClientes } = require("../controladores/clientes/index");

//middlewares
const autenticarLogin = require("../intermediarios/autenticarLogin");
const validarDados = require("../intermediarios/validarDados");

//utilitários
const dadosCliente = require("../utilitarios/validacoes/dados_clientes");
const parametro = require("../utilitarios/validacoes/dados_parametro");

const cliente = express.Router();

cliente.use(autenticarLogin);

//rotas
cliente.post("/cliente", validarDados({ body: dadosCliente }), cadastrarCliente);
cliente.get("/cliente", listarClientes);

cliente.get("/cliente/:id", validarDados({ params: parametro }), detalharCliente);
cliente.put(
    "/cliente/:id",
    validarDados({
        params: parametro,
        body: dadosCliente,
    }),
    editarCliente
);

module.exports = cliente;
