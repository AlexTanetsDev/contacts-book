import {
  Contact,
  ContactItem,
  DeleteContactBtn,
  List,
} from "./ContactList.styled";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filter/filterSlice";
import { deleteContact } from "../../redux/contacts/operations";
import { FaUsersSlash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const ContactList = () => {
  const contacts = useAppSelector(selectContacts);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleClick = (id: number | undefined) => {
    if (id) dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {getVisibleContacts().map((visibleContact) => {
        const { id, name, number } = visibleContact;
        return (
          <ContactItem key={id}>
            <Contact>
              {name.toUpperCase()} : {number}
            </Contact>
            <DeleteContactBtn type="button" onClick={() => handleClick(id)}>
              <FaUsersSlash />
            </DeleteContactBtn>
          </ContactItem>
        );
      })}
    </List>
  );
};
