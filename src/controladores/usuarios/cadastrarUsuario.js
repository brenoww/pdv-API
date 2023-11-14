const knex = require("../../conexoes/knex");
const bcrypt = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const usuarioExistente = await knex("usuarios").where({ email }).first();

        if (usuarioExistente) {
            return res.status(400).json({ mensagem: "Usuario já cadastrado" });
        }

        const senhaEncriptada = await bcrypt.hash(senha, 10);

        await knex("usuarios").insert({
            nome,
            email,
            senha: senhaEncriptada,
        });

        return res.status(201).json({ mensagem: "Usuario cadastrado com sucesso" });
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = cadastrarUsuario;
