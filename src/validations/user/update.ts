import { validate, Joi } from "express-validation";

export const updateUser = validate({
  params: Joi.object({
    user_id: Joi.number().required(),
  }),
  body: Joi.object({
    coments: Joi.string().required(),
  }),
});
