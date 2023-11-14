const joi = require("joi");

const dadosProduto = joi.object({
  descricao: joi.string().trim().required().messages({
    "any.required": "O campo descricao é obrigatório",
    "string.empty": "O campo descricao é obrigatório",
    "string.base": "O campo descricao deve ser uma string",
  }),
  quantidade_estoque: joi.number().integer().required().messages({
    "any.required": "O campo quantidade_estoque é obrigatório",
    "number.empty": "O campo quantidade_estoque é obrigatório",
    "number.base": "A quantidade deve ser um valor numérico inteiro",
  }),
  valor: joi.number().integer().required().messages({
    "any.required": "O campo valor é obrigatório",
    "number.empty": "O campo valor é obrigatório",
    "number.base": "O campo valor deve ser um inteiro",
  }),
  categoria_id: joi.number().integer().required().messages({
    "any.required": "O campo categoria_id é obrigatório",
    "number.empty": "O campo categoria_id é obrigatório",
    "number.base": "A deve categoria_id ser um valor numérico inteiro",
  }),
});

module.exports = dadosProduto;
