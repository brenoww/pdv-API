const joi = require("joi");

const dadosCliente = joi.object({
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
  cpf: joi
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
    .required()
    .messages({
      "any.required": "O campo CPF é obrigatório",
      "string.empty": "O campo CPF é obrigatório",
      "string.pattern.base":
        "O campo CPF deve seguir o formato: xxx.xxx.xxx-xx",
    }),
  cep: joi
    .string()
    .regex(/^\d{5}-\d{3}$/)
    .messages({
      "string.pattern.base": "O campo CEP deve seguir o formato: xxxxx-xxx",
    }),
  rua: joi.string().max(255).messages({
    "string.max": "A rua deve conter no máximo 255 caracteres",
  }),
  numero: joi.number().integer().messages({
    "number.base": "O número da residência deve ser um valor numérico inteiro",
    "number.integer": "O número da residência deve ser um número inteiro",
  }),
  bairro: joi.string().max(100),
  cidade: joi.string().max(50),
  estado: joi.string().max(50),
});

module.exports = dadosCliente;
