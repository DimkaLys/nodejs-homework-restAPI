import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import contacts from "../../db/contacts.json";

const __dirname = path.dirname("db/contacts");

export const addContact = async ({ name, email, phone }) => {
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
};
