import Contact from "../../model/contact";

export const getContactById = async (contactId) => {
  const result = await Contact.findById(contactId);
  return result;
};
