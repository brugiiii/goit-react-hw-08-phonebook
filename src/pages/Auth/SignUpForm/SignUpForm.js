import { signUp } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import { Formik } from 'formik';
import { object, string } from 'yup';

import {
  FormEl,
  Input,
  ErrorMessageEl,
  Label,
  Button,
} from './SignUpForm.styled';

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
});

const initialValues = { name: '', email: '', password: '' };

const SignUpForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (values, { resetForm }) => {
    dispatch(signUp(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <FormEl>
        <Label>
          Name
          <Input type="text" name="name" required />
          <ErrorMessageEl name="name" component="div" />
        </Label>
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
        <Button type="submit">sign up</Button>
      </FormEl>
    </Formik>
  );
};

export default SignUpForm;
