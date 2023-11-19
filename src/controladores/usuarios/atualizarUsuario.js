const knex = require("../../conexoes/knex");
const bcrypt = require("bcrypt");

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const id = req.usuarioLogado.id;

    try {
        const usuarioExistente = await knex("usuarios").where({ email }).first();

        if (usuarioExistente && usuarioExistente.id !== id) {
            return res.status(400).json({
                mensagem: "O endereço de e-mail informado já está em uso",
            });
        }

        const senhaCadastrada = await bcrypt.compare(senha, usuarioExistente.senha);

        if (usuarioExistente.nome === nome && usuarioExistente.email === email && senhaCadastrada) {
            return res.status(400).json({
                mensagem: "Os dados já estão cadastrados!",
            });
        }

        const senhaEncriptada = await bcrypt.hash(senha, 10);

        const novosDados = {
            nome,
            senha: senhaEncriptada,
            email,
        };

        await knex("usuarios").where({ id }).update(novosDados);

        return res.status(200).json({ mensagem: "Usuário atualizado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = atualizarUsuario;
