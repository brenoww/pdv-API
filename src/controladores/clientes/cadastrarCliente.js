const knex = require("../../conexoes/knex");
const naoExiste = require("../../utilitarios/servicos/naoExiste");

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        await naoExiste("clientes", "email", email, "Cliente já cadastrado!");
        await naoExiste("clientes", "cpf", cpf, "Cpf já cadastrado!");

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
        return res.status(error.staus | 500).json({ mensagem: error.message });
    }
};

module.exports = cadastrarCliente;
