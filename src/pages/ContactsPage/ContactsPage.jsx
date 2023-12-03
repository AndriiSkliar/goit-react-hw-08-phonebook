import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Form } from "components/Form/Form";
import { Section } from "components/Section/Section";
import { Filter } from "components/Filter/Filter";
import { addContact, fetchContacts } from 'redux/contacts/contacts.operations';
import { toggleModal } from 'redux/modal/modal.reducer';
import { Modal } from 'components/Modal/Modal';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { selectContacts, selectContactsError, selectContactsIsLoading } from 'redux/selectors/contacts.selectors';
import { selectIsOpenModal } from 'redux/selectors/modal.selectors';
import { ContactList } from 'components/Contacts/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const isOpenModal = useSelector(selectIsOpenModal);

  const formSubmitHandler = data => {
    const hasDuplicates = contacts.some(
      contact => contact.name === data.name
    );

    if (hasDuplicates) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(data));
  };

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return (
      <div className="container">
        <div className="wrapper">
          {error && <Error error={error} />}
          {isLoading && <Loader />}
          <button className='openModal' type='button' onClick={() => dispatch(toggleModal())}>❌</button>
          <Section title="Phonebook">
            <Form onSubmit={formSubmitHandler} />
          </Section>
          <Section title="Contacts">
            <Filter />
            {contacts !== null && <ContactList />}
          </Section>
        </div>
        {isOpenModal && <Modal />}
      </div>
    );
};

export default ContactsPage;
