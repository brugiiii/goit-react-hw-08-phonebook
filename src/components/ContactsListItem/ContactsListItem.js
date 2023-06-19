import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ListItem, Button, Name, Number } from './ContactsListItem.styled';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { toast } from 'react-toastify';

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ListItem>
      <Name>{name}</Name>
      <Number href={`tel:${number}`}>{number}</Number>
      <Button
        onClick={() => {
          dispatch(deleteContact(id));
          setIsLoading(true);
          toast.success(`${name} has been removed from contacts`);
        }}
        disabled={isLoading}
      >
        {isLoading ? 'Loading' : 'Delete'}
      </Button>
    </ListItem>
  );
};

export default ContactsListItem;
