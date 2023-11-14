const express = require("express");

//controladores de Categoria
const { listarCategorias } = require("../controladores/categorias/index");

const categoria = express.Router();

categoria.get("/categoria", listarCategorias);

module.exports = categoria;
