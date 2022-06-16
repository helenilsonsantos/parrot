const { validate, Joi } =  require ('express-validation')

module.exports = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    user_id: Joi.number().required(),
    comments: Joi.string().required(),
  }),
})
