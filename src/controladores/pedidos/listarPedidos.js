const knex = require("../../conexoes/knex");

const listarPedidos = async (req, res) => {
    const { cliente_id } = req.query;
    try {
        const query = knex("pedidos")
            .select("pedidos.id", "pedidos.valor_total", "pedidos.observacao", "pedidos.cliente_id")
            .leftJoin("pedido_produtos", "pedidos.id", "pedido_produtos.pedido_id")
            .select(
                "pedido_produtos.id as pedido_produto_id",
                "pedido_produtos.quantidade_produto",
                "pedido_produtos.valor_produto",
                "pedido_produtos.produto_id"
            )
            .groupBy("pedidos.id", "pedido_produtos.id");

        if (cliente_id) {
            query.where("pedidos.cliente_id", cliente_id);
        }

        const resultados = await query;

        const pedidos = [];
        const pedidoProdutos = [];

        for (const resultado of resultados) {
            const pedido = {
                id: resultado.id,
                valor_total: resultado.valor_total,
                observacao: resultado.observacao,
                cliente_id: resultado.cliente_id,
            };
            pedidos.push(pedido);

            const produto = {
                id: resultado.pedido_produto_id,
                quantidade_produto: resultado.quantidade_produto,
                valor_produto: resultado.valor_produto,
                pedido_id: resultado.id,
                produto_id: resultado.produto_id,
            };
            pedidoProdutos.push(produto);
        }

        return res.status(200).json({ pedidos: pedidos[0], pedidoProdutos });
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

module.exports = listarPedidos;
