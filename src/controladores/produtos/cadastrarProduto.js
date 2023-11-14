const knex = require("../../conexoes/knex");
const buscarErroSeEncontrado = require("../../utilitarios/servicos/buscarErroSeEncontrado");
const buscarErroSeNaoEncontrado = require("../../utilitarios/servicos/buscarErroSeNaoEcontrado");
const { uploadArquivo } = require("../../utilitarios/servicos/uploads");

const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = JSON.parse(req.body.dados_produto);
    const { imagem_produto } = req.files;
    const [imagem] = imagem_produto;

    try {
        await buscarErroSeEncontrado("produtos", "descricao", descricao, "Produto já cadastrado");
        await buscarErroSeNaoEncontrado("categorias", "id", categoria_id, "Categoria não encontrada.");

        const produto = await knex("produtos")
            .insert({
                descricao,
                quantidade_estoque,
                valor,
                categoria_id,
            })
            .returning("id");

        const { id } = produto[0];

        if (imagem) {
            const arquivo = await (async () => {
                const resultado = await uploadArquivo("imagens/produtos/", imagem, id);
                return resultado;
            })();

            await knex("produtos").where("id", id).update({ produto_imagem: arquivo.Location });
        }

        return res.status(201).json({ mensagem: "Produto cadastrado com sucesso" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = cadastrarProduto;
