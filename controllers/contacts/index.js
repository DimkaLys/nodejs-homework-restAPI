import model from "../../models/contacts/index.js";

const getContacts = async (req, res, next) => {
  const contacts = await model.listContacts();
  res.status(200).json(contacts);
};

const getContactsById = async (req, res, next) => {
  const { id } = req.params;
  const contact = await model.getContactById(id);
  if (contact) {
    return res.status(200).json(contact);
  }
  res.status(404).json({ message: "Not found" });
};

const addContact = async (req, res, next) => {
  const newContact = await model.addContact(req.body);
  res.status(201).json(newContact);
};

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const contact = await model.removeContact(id);
  if (contact) {
    return res.status(200).json({ message: "contact deleted" });
  }
  res.status(404).json({ message: "Not found" });
};

const udateContact = async (req, res, next) => {
  const { id } = req.params;
  const contact = await model.updateContact(id, req.body);
  if (contact) {
    return res.status(200).json(contact);
  }
  res.status(404).json({ message: "Not found" });
};

export {
  getContacts,
  getContactsById,
  addContact,
  removeContact,
  udateContact,
};
