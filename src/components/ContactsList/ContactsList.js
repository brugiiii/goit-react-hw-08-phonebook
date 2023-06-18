// redux
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// components
import { TailSpin } from 'react-loader-spinner';
import { ContactsListItem } from '../ContactsListItem';
import {
  selectFilteredContacts,
  selectIsContactsFetching,
} from 'redux/contacts/contacts-selectors';

// styles

import { fetchContacts } from 'redux/contacts/contacts-operations';

import { ContactsListEl } from './ContactsList.styled';
import { useEffect } from 'react';

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
        <TailSpin
          height="80"
          width="80"
          color="tomato"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
          visible={true}
        />
      ) : (
        contacts.map(({ name, number, id }) => (
          <ContactsListItem key={id} name={name} number={number} id={id} />
        ))
      )}
    </ContactsListEl>
  );
};
