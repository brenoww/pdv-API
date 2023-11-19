const knex = require("../../conexoes/knex");

const detalharCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const clientesCadastrados = await knex.where("id", id).select("*").from("clientes").first();

        if (!clientesCadastrados) {
            return res.status(404).json({ mensagem: "Cliente não encontrado." });
        }
        return res.status(200).json(clientesCadastrados);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = detalharCliente;
