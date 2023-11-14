const joi = require("joi");

const dadosPedido = joi.object({
    cliente_id: joi.number().integer().required().messages({
        "any.required": "O campo cliente_id é obrigatório",
        "number.empty": "O campo cliente_id é obrigatório",
        "number.base": "O campo cliente_id deve ser um valor numérico inteiro",
    }),
    pedido_produtos: joi.required().messages({
        "any.required": "O campo pedido_produtos é obrigatório",
    }),
});

module.exports = dadosPedido;
