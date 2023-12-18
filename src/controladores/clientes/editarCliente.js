const knex = require("../../conexoes/knex");
const existe = require("../../utilitarios/servicos/existe");
const buscarSemErro = require("../../utilitarios/servicos/encontrar");

const editarCliente = async (req, res) => {
    const id = Number(req.params.id);
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

    try {
        await existe("clientes", "id", id, "Cliente não encontrado.");

        const dados = await Promise.all(
            buscarSemErro("clientes", "email", email),
            buscarSemErro("clientes", "cpf", cpf)
        );

        const [emailCadastrado, cpfCadastrado] = dados;

        if (emailCadastrado && emailCadastrado.id !== id) {
            return res.status(400).json({
                mensagem: "Email ou cpf já está cadastrado. Por favor, tente novamente.",
            });
        }

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
        return res.status(error.status | 500).json({ mensagem: error.message });
    }
};

module.exports = editarCliente;
