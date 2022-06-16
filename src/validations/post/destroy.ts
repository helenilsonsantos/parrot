import { validate, Joi } from "express-validation";

export const destroyPost = validate({
  params: Joi.object({
    idUser: Joi.number().required(),
  }),
});
