const knex = require("../../conexoes/knex");

const buscarSemErro = async (tabela, campo, valor) => {
    const encontrado = await knex.select("*").from(tabela).where(campo, valor).first();
    return encontrado;
};

module.exports = buscarSemErro;
