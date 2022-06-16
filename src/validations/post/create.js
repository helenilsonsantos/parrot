const { validate, Joi } =  require ('express-validation')


module.exports = validate({
  body: Joi.object({
    user_id: Joi.string().required(),
    coments: Joi.string().required(),
  }),
});
