const knex = require("../../conexoes/knex");

const detalharCliente = async (req, res) => {
    try {
        const id = req.params.id;
        const clientesCadastrados = await knex.where("id", id).select("*").from("clientes");
        return res.status(200).json(clientesCadastrados);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = detalharCliente;
