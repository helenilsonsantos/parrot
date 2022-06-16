import { validate, Joi } from "express-validation";

export const destroyUser = validate({
  params: Joi.object({
    user_id: Joi.number().required(),
  }),
});
