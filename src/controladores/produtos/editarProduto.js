const knex = require("../../conexoes/knex");
const buscarErroSeNaoEncontrado = require("../../utilitarios/servicos/buscarErroSeNaoEcontrado");
const { deletarArquivo, uploadArquivo } = require("../../utilitarios/servicos/uploads");

const editarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = JSON.parse(req.body.dados_produto);
    const { imagem_produto } = req.files;
    const [imagem] = imagem_produto;
    const { id } = req.params;

    try {
        await buscarErroSeNaoEncontrado("produtos", "id", id, "Produto não encontrado.");
        await buscarErroSeNaoEncontrado("categorias", "id", categoria_id, "Categoria não encontrada.");

        const { produto_imagem: path } = await knex("produtos").select("produto_imagem").where({ id }).first();

        const arquivo = await (async () => {
            if (imagem) {
                await deletarArquivo(path);

                const resultado = uploadArquivo("imagens/produtos/", imagem, id);
                return resultado;
            }
        })();

        const produtoEditado = await knex("produtos")
            .update({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
                produto_imagem: arquivo ? arquivo.Location : null,
            })
            .where({ id })
            .returning("*");

        return res.status(200).json(produtoEditado);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = editarProduto;
