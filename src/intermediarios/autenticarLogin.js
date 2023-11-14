const jwt = require("jsonwebtoken");
const knex = require("../conexoes/knex");

const autenticarLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: "Acesso negado." });
    }

    try {
        const token = authorization.split(" ")[1];

        const { id } = jwt.verify(token, process.env.SENHA_JWT);

        const usuario = await knex("usuarios").select("id", "nome", "email").where({ id }).first();

        req.usuarioLogado = usuario;

        next();
    } catch (erro) {
        return res.status(401).json({ mensagem: "Acesso negado." });
    }
};

module.exports = autenticarLogin;
