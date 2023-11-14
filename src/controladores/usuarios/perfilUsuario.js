const perfilUsuario = async (req, res) => {
    const usuario = req.usuarioLogado;
    try {
        return res.json(usuario);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = perfilUsuario;
