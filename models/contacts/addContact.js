import Contact from "../../model/contact";

export const addContact = async (body) => {
  const result = await Contact.create(body);
  return result;
};
