const joi = require("joi");

const dadosUsuario = joi.object({
    nome: joi.string().trim().required().messages({
        "any.required": "O campo nome é obrigatório",
        "string.empty": "O campo nome é obrigatório",
        "string.base": "O campo nome deve ser uma string",
    }),
    email: joi.string().email().required().messages({
        "any.required": "O campo e-mail é obrigatório",
        "string.empty": "O campo e-mail é obrigatório",
        "string.email": "O campo e-mail precisa conter um endereço válido",
    }),
    senha: joi.string().trim().required().messages({
        "any.required": "O campo senha é obrigatório",
        "string.empty": "O campo senha é obrigatório",
        "string.base": "O campo senha deve ser uma string",
    }),
});

module.exports = dadosUsuario;
