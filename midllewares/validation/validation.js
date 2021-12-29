import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.bool().optional(),
});

export const validation = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next();
};
