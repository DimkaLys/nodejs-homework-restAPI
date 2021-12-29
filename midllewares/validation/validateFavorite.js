import Joi from "joi";

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

export const validateFavorite = async (req, res, next) => {
  try {
    await updateFavoriteSchema.validateAsync(req.body);
  } catch (err) {
    const [{ type }] = err.details;
    if (type === "object unknown") {
      return res.status(400).json({ message: err.message });
    }
    return res.status(400).json({ message: "missing field favorite" });
  }
  next();
};
