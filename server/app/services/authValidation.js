const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().regex(
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  ),
  password: Joi.string().regex(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/
  ),
});

const validateAuth = (req, res, next) => {
  const { email, password } = req.body;

  try {
    authSchema.validate({ email, password });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateAuth;
