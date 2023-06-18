import { logIn } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import { object, string } from 'yup';

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

  const onFormSubmit = (values, { resetForm }) => {
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
