// formik
import { Formik } from 'formik';
import { object, string, number } from 'yup';

// redux
import {
  selectContacts,
  selectIsContactAdded,
} from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';

// styles
import {
  FormEl,
  Label,
  Input,
  Button,
  ErrorMessageEl,
} from './ContactForm.styled';
import Spinner from 'components/Spinner';

import { toast } from 'react-toastify';

const schema = object({
  name: string().required(),
  number: number('please write a number').required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsContactAdded);
  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    const loweredName = values.name.toLowerCase();

    contacts.find(contact => contact.name.toLowerCase() === loweredName)
      ? toast.error(`${values.name} is already in contacts`)
      : dispatch(addContact(values)) &&
        toast.success(`${values.name} has been added to your contacts`) &&
        resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onFormSubmit}
      >
        <FormEl>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessageEl name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessageEl name="number" component="div" />
          </Label>
          <Button type="submit" disabled={isLoading}>
            add contact
            {isLoading && (
              <Spinner
                width={20}
                height={20}
                color="#3b5998"
                styles={{
                  position: 'absolute',
                  top: '50%',
                  marginTop: -10,
                  right: 6,
                }}
              />
            )}
          </Button>
        </FormEl>
      </Formik>
    </>
  );
};
