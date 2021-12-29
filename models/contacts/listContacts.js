import Contact from "../../model/contact";

export const listContacts = async () => {
  const result = await Contact.find();
  return result;
};
