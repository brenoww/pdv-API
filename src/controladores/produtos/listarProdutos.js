const knex = require("../../conexoes/knex");
const buscarSemErro = require("../../utilitarios/servicos/buscarSemErro");

const listarProdutos = async (req, res) => {
    const { categoria_id } = req.query;

    try {
        let produtos = [];

        if (categoria_id) {
            const categoria = buscarSemErro("categorias", "id", categoria_id);
            if (!categoria) {
                return res.status(400).json({ mensagem: "O ID de categoria é inválido." });
            }
            produtos = await knex("produtos").where({
                categoria_id,
            });
            if (produtos.length === 0) {
                return res.status(404).json({ mensagem: "Nenhum produto encontrado." });
            }
            return res.json(produtos);
        }
        produtos = await knex("produtos").select("*");

        if (produtos.length === 0) {
            return res.status(404).json({ mensagem: "Nenhum produto encontrado." });
        }

        return res.json(produtos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = listarProdutos;
