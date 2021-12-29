import Joi from "joi";

const updateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().optional(),
  favorite: Joi.bool().optional(),
}).or("name", "email", "phone");

export const validateUpdate = async (req, res, next) => {
  try {
    await updateSchema.validateAsync(req.body);
  } catch (err) {
    const [{ type }] = err.details;
    if (type === "object unknown") {
      return res.status(400).json({ message: err.message });
    }
    return res.status(400).json({ message: "missing fields" });
  }
  next();
};
