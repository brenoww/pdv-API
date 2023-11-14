const knex = require("../../conexoes/knex");
const { deletarArquivo } = require("../../utilitarios/servicos/uploads");

const excluirProduto = async (req, res) => {
    const { id } = req.params;

    try {
        const produtoComprado = await knex("pedido_produtos").where("produto_id", id).first();

        if (!produtoComprado) {
            const produtoExistente = await knex("produtos").where({ id }).first().returning("produto_imagem");

            if (produtoExistente) {
                await deletarArquivo(produtoExistente.produto_imagem);
                await knex("produtos").del().where({ id });

                return res.status(200).json({ mensagem: "Produto removido com sucesso" });
            } else {
                return res.status(404).json({ mensagem: "Produto não encontrado" });
            }
        } else {
            return res.status(409).json({
                mensagem: "O produto que você deseja remover está presente em um pedido",
            });
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = excluirProduto;
