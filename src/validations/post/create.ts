import { validate, Joi } from "express-validation";

export const createPost = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    apartment: Joi.string().required(),
    password: Joi.string().required(),
    admin: Joi.string().required(),
  }),
});
