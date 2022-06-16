import { validate, Joi } from "express-validation";

export const createUser = validate({
  body: Joi.object({
    user_id: Joi.string().required(),
    coments: Joi.string().required(),
  }),
});
