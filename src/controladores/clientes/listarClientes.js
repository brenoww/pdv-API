const knex = require("../../conexoes/knex");

const listarClientes = async (req, res) => {
    try {
        const clientesCadastrados = await knex.select("*").from("clientes");
        return res.status(200).json(clientesCadastrados);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = listarClientes;
