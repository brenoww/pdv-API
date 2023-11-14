const knex = require("../../conexoes/knex");
const buscarErroSeNaoEncontrado = require("../../utilitarios/servicos/buscarErroSeNaoEcontrado");
const buscarSemErro = require("../../utilitarios/servicos/buscarSemErro");

const editarCliente = async (req, res) => {
    const id = Number(req.params.id);

    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;
    try {
        await buscarErroSeNaoEncontrado("clientes", "id", id, "Cliente não encontrado.");

        const emailCadastrado = await buscarSemErro("clientes", "email", email);

        if (emailCadastrado && emailCadastrado.id !== id) {
            return res.status(400).json({
                mensagem: "Email ou cpf já está cadastrado. Por favor, tente novamente.",
            });
        }

        const cpfCadastrado = await buscarSemErro("clientes", "cpf", cpf);

        if (cpfCadastrado && cpfCadastrado.id !== id) {
            return res.status(400).json({
                mensagem: "Email cpf já está cadastrado. Por favor, tente novamente.",
            });
        }

        const clienteAtualizado = await knex("clientes")
            .update({
                nome,
                email,
                cpf,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                estado,
            })
            .where({ id })
            .returning("*");

        return res.status(200).json(clienteAtualizado);
    } catch (error) {
        return res.status(404).json({ mensagem: error.message });
    }
};

module.exports = editarCliente;
