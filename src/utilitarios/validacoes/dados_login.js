const joi = require("joi");

const dadosLogin = joi.object({
    email: joi.string().email().required().messages({
        "any.required": "O campo e-mail é obrigatório",
        "string.empty": "O campo e-mail é obrigatório",
        "string.email": "O campo e-mail precisa conter um endereço válido",
    }),
    senha: joi.string().required().messages({
        "any.required": "O campo senha é obrigatório",
        "string.empty": "O campo senha é obrigatório",
    }),
});

module.exports = dadosLogin;
