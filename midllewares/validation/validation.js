import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

export const validation = async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next();
};
