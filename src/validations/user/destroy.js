const { validate, Joi } =  require ('express-validation')

module.exports = validate({
  params: Joi.object({
    idUser: Joi.number().required(),
  }),
});
