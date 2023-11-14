const express = require("express");
const categoria = require("./categoriasRotas");
const usuario = require("./usuariosRotas");
const cliente = require("./clientesRotas");
const produto = require("./produtosRotas");
const pedidos = require("./pedidosRotas");

const rota = express.Router();

rota.use(categoria);
rota.use(usuario);
rota.use(produto);
rota.use(cliente);
rota.use(pedidos);

module.exports = rota;
