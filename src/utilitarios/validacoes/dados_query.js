const joi = require("joi");

const query = joi.object({
  categoria_id: joi.number().integer().positive().messages({
    "number.base": "O ID ser um valor numérico inteiro",
    "number.integer": "O ID deve ser um número inteiro",
    "number.positive": "O ID deve ser um inteiro positivo",
  }),
});

module.exports = query;
