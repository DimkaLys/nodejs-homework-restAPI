import fs from "fs/promises";
import path from "path";
import contacts from "../../db/contacts.json";

const __dirname = path.dirname("db/contacts");

export const removeContact = async (contactId) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const result = contacts.splice(index, 1);
    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(contacts, null, 2)
    );
    return result;
  }
  return null;
};
