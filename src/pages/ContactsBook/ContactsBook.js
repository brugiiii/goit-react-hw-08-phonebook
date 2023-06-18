// Components
import { ContactsList } from 'components/ContactsList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

import { ContactsBookEl, ContactsTitle } from './ContactsBook.styled';

const ContactsBook = () => {
  return (
    <ContactsBookEl>
      <ContactForm />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactsList />
    </ContactsBookEl>
  );
};

export default ContactsBook;
