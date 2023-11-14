const knex = require("../../conexoes/knex");

const detalharProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const produto = await knex("produtos").where({ id }).first();

        if (!produto) {
            return res.status(404).json({ mensagem: "Produto não encontrado." });
        }

        return res.json(produto);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = detalharProduto;
