const express = require("express");

//controladores de pedido
const { cadastrarPedido, listarPedidos } = require("../controladores/pedidos/index");

//middlewares
const autenticarLogin = require("../intermediarios/autenticarLogin");

//utilitários
const dados_pedidos = require("../utilitarios/validacoes/dados_pedidos");

const pedidos = express.Router();

pedidos.use(autenticarLogin);

//controladores de pedido
pedidos.post("/pedidos", cadastrarPedido);
pedidos.get("/pedidos", listarPedidos);

module.exports = pedidos;
