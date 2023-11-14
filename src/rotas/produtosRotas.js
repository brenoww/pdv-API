const express = require("express");

//controladores de produto
const {
    cadastrarProduto,
    detalharProduto,
    editarProduto,
    excluirProduto,
    listarProdutos,
} = require("../controladores/produtos/index");

//middlewares
const autenticarLogin = require("../intermediarios/autenticarLogin");
const validarDados = require("../intermediarios/validarDados");
const multer = require("../intermediarios/multer");

//utilitários
const dadosProdutos = require("../utilitarios/validacoes/dados_produtos");
const parametro = require("../utilitarios/validacoes/dados_parametro");
const query = require("../utilitarios/validacoes/dados_query");

const produto = express.Router();

produto.use(autenticarLogin);

//rotas
produto.post(
    "/produto",
    multer.fields([{ name: "dados_produto" }, { name: "imagem_produto" }]),
    validarDados({ body: dadosProdutos }, "dados_produto"),
    cadastrarProduto
);
produto.get("/produto", validarDados({ query }), listarProdutos);
produto.get("/produto/:id", validarDados({ params: parametro }), detalharProduto);
produto.put(
    "/produto/:id",
    multer.fields([{ name: "dados_produto" }, { name: "imagem_produto" }]),
    validarDados({ params: parametro }),
    validarDados(dadosProdutos, "dados_produto"),
    editarProduto
);
produto.delete("/produto/:id", validarDados({ params: parametro }), excluirProduto);

module.exports = produto;
