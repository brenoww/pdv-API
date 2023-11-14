const joi = require("joi");

const dadosPedidoProduto = joi.object({
    produto_id: joi.number().integer().required().messages({
        "any.required": "O campo produto_id é obrigatório",
        "number.empty": "O campo produto_id é obrigatório",
        "number.base": "O campo produto_id deve ser um valor numérico inteiro",
    }),
    quantidade_produto: joi.number().integer().required().messages({
        "any.required": "O campo quantidade_produto é obrigatório",
        "number.empty": "O campo quantidade_produto é obrigatório",
        "number.base": "O campo quantidade_produto deve ser um valor numérico inteiro",
    }),
});

module.exports = dadosPedidoProduto;
