const { validate, Joi } =  require ('express-validation')


module.exports = validate({
  body: Joi.object({
    user_id: Joi.string().required(),
    comments: Joi.string().required(),
  }),
});
