import { validate, Joi } from "express-validation";

export const updatePost = validate({
  params: Joi.object({
    idUser: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    apartment: Joi.string().required(),
    password: Joi.string().required(),
    admin: Joi.string().required(),
  }),
});
