require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("../../conexoes/knex");

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await knex("usuarios").where({ email }).first();

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário e/ou senha inválido(s)." });
        }

        const senhaVerificada = await bcrypt.compare(senha, usuario.senha);
        if (!senhaVerificada) {
            return res.status(400).json({ mensagem: "Usuário e/ou senha inválido(s)." });
        }

        const token = jwt.sign({ id: usuario.id }, process.env.SENHA_JWT, {
            expiresIn: "8h",
        });

        const { senha: _, ...usuarioLogado } = usuario;

        return res.status(200).json({ usuario: usuarioLogado, token });
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = login;
