// react
import { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectFilteredContacts,
  selectIsContactsFetching,
} from 'redux/contacts/contacts-selectors';

// components
import Spinner from '../Spinner';
import ContactsListItem from '../ContactsListItem';

// styles
import { ContactsListEl } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsContactsFetching);

  return (
    <ContactsListEl>
      {isLoading ? (
        <Spinner width={80} height={80} styles={{ margin: '0 auto' }} />
      ) : (
        contacts.map(({ name, number, id }) => (
          <ContactsListItem key={id} name={name} number={number} id={id} />
        ))
      )}
    </ContactsListEl>
  );
};
