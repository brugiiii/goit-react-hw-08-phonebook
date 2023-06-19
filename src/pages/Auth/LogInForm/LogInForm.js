import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from 'redux/auth/auth-operations';
import { selectError } from 'redux/auth/auth-selectors';

import { Formik } from 'formik';
import { object, string } from 'yup';

import { toast } from 'react-toastify';

import {
  FormEl,
  Label,
  Input,
  ErrorMessageEl,
  Button,
} from './LogInForm.styled';

const schema = object({
  email: string().email().required(),
  password: string().required(),
});

const initialValues = { email: '', password: '' };

const LogInForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    error && toast.error('User not found, please try again');
  }, [error]);

  const onFormSubmit = values => {
    dispatch(logIn(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <FormEl>
        <Label>
          Email
          <Input type="email" name="email" required />
          <ErrorMessageEl name="email" component="div" />
        </Label>

        <Label>
          Password
          <Input type="password" name="password" required />
          <ErrorMessageEl name="password" component="div" />
        </Label>

        <Button type="submit">log in</Button>
      </FormEl>
    </Formik>
  );
};

export default LogInForm;
