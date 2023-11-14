const validarDados = (schema, data) => async (req, res, next) => {
    try {
        if (!data) {
            if (schema.body) await schema.body.validateAsync(req.body);
            next();
        } else {
            const body = JSON.parse(Object.getOwnPropertyDescriptor(req.body, data).value);
            if (schema.body) await schema.body.validateAsync(body);
            next();
        }
        if (schema.params) await schema.params.validateAsync(req.params);
        if (schema.query) await schema.query.validateAsync(req.query);
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
};

module.exports = validarDados;
