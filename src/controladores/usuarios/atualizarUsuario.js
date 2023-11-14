const knex = require("../../conexoes/knex");
const bcrypt = require("bcrypt");

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const id = req.usuarioLogado.id;

    try {
        const usuarioExistente = await knex("usuarios")
            .where({ email } || { nome } || {})
            .first();

        if (usuarioExistente) {
            return res.status(400).json({
                mensagem: " O endereço de e-mail informado já está em uso",
            });
        }

        const senhaEncriptada = await bcrypt.hash(senha, 10);

        const novosDados = {
            nome,
            senha: senhaEncriptada,
            email,
        };

        await knex("usuarios").where({ id }).update(novosDados);

        return res.status(200).json({ mensagem: "Usuário atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = atualizarUsuario;
