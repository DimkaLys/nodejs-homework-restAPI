import fs from "fs/promises";
import path from "path";
import contacts from "../../db/contacts.json";

const __dirname = path.dirname("db/contacts");

export const updateContact = async (contactId, body) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const updateContact = { id: contactId, ...contacts[index], ...body };
    contacts[index] = updateContact;
    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(contacts, null, 2)
    );
    return updateContact;
  }
  return null;
};
