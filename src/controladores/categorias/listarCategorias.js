const knex = require("../../conexoes/knex");

const listarCategorias = async (req, res) => {
    try {
        const categorias = await knex.select("*").from("categorias");
        return res.status(200).json(categorias);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = listarCategorias;
