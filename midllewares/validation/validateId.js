import Joi from "joi";

const idSchema = Joi.object({ id: Joi.string().required() });

export const validateId = async (req, res, next) => {
  try {
    const value = await idSchema.validateAsync(req.params);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};
