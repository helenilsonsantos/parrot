const { validate, Joi } =  require ('express-validation')

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    apartment: Joi.string().required(),
    password: Joi.string().required(),
    admin: Joi.boolean().required(),
  }),
});
