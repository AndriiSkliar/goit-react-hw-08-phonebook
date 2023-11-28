import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Form } from "./Form/Form";
import { ContactList } from "./Contacts/ContactsList";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";
import { addContact, fetchContacts } from 'redux/contacts/contacts.reducer';
import { toggleModal } from 'redux/modal/modal.reducer';
import { Modal } from './Modal/Modal';
import { Error } from './Error/Error';
import { Loader } from './Loader/Loader';
import { selectContacts, selectContactsError, selectContactsIsLoading } from 'redux/selectors/contacts.selectors';
import { selectIsOpenModal } from 'redux/selectors/modal.selectors';

export const App = () => {
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
