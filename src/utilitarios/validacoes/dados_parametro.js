const joi = require("joi");

const parametro = joi.object({
  id: joi.number().integer().positive().required().messages({
    "number.base": "O ID ser um valor numérico inteiro",
    "number.integer": "O ID deve ser um número inteiro",
    "number.positive": "O ID deve ser um inteiro positivo",
    "any.required": "O ID deve ser informado",
  }),
});

module.exports = parametro;
