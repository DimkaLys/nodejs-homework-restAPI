import express from "express";
import {
  getContacts,
  getContactsById,
  addContact,
  removeContact,
  updateContact,
} from "../../controllers/contacts/index.js";
import { validation } from "../../midllewares/validation/validation";
import { validateId } from "../../midllewares/validation/validateId";
import { validateUpdate } from "../../midllewares/validation/validateUpdate";
import { validateFavorite } from "../../midllewares/validation/validateFavorite";

const router = express.Router();

router.get("/", getContacts);

router.get("/:id", validateId, getContactsById);

router.post("/", validation, addContact);

router.delete("/:id", validateId, removeContact);

router.put("/:id", validateId, validateUpdate, updateContact);

router.patch("/:id/favorite", validateId, validateFavorite, updateContact);

export default router;
