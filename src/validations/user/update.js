const { validate, Joi } =  require ('express-validation')

module.exports = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    apartment: Joi.string().required(),
    password: Joi.string().required(),
    admin: Joi.boolean().required(),
  }),
})
