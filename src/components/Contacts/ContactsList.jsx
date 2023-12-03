import { Contact } from "./Contact";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';

import css from './Contact.module.css'
import { selectContacts, selectFilteredContacts } from "redux/selectors/contacts.selectors";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts)

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const sortedContacts = contacts && [...filteredContacts].sort((a, b) =>
  a.name.localeCompare(b.name)
);

  return (
    <ul className={css.contacts}>
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        sortedContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} handleDeleteContact={handleDeleteContact} />
        ))
      )}
    </ul>
  );
};
