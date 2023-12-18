const knex = require("../../conexoes/knex");

const naoExiste = async (tabela, campo, valor, mensagemErro) => {
    try {
        const encontrado = await knex.select("*").from(tabela).where(campo, valor).first();
        if (encontrado) {
            const erro = new Error(mensagemErro);
            erro.status = 400;
            throw erro;
        }
    } catch (error) {
        throw error;
    }
};

module.exports = naoExiste;
