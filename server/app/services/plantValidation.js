const Joi = require("joi");

const plantValidationSchema = Joi.object({
  name: Joi.string().max(80).required(),
  surname: Joi.string().max(80),
  picture: Joi.string().max(255).required(),
  place: Joi.string().max(80).required(),
  userId: Joi.number().required(),
  wateringFid: Joi.number().required(),
  solarEid: Joi.number().required(),
});

const plantValidation = (req, res, next) => {
  const { error } = plantValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error == null) {
    next();
  } else {
    res.json({ validationErrors: error.details });
  }
};

module.exports = plantValidation;
