const knex = require("../../conexoes/knex");
const buscarErroSeEncontrado = require("../../utilitarios/servicos/buscarErroSeEncontrado");

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        await buscarErroSeEncontrado("clientes", "email", email, "Cliente já cadastrado");
        await buscarErroSeEncontrado("clientes", "cpf", cpf, "Cpf já cadastrado");

        await knex("clientes").insert({
            nome,
            email,
            cpf,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            estado,
        });

        return res.status(201).json({ mensagem: "Cliente cadastrado com sucesso" });
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

module.exports = cadastrarCliente;
