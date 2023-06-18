import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  padding: 15px;
  margin: 0 auto 15px;
  width: 350px;

  background-color: lightgray;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const Input = styled(Field)`
  height: 30px;
  font-size: 16px;

  border-radius: 5px;
  border: 1px solid grey;
`;

export const ErrorMessageEl = styled(ErrorMessage)`
  color: red !important;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 15px;
`;

export const Button = styled.button`
  font-size: 16px;

  width: 150px;
  height: 40px;

  display: block;
  margin: 0 auto;

  color: white;
  background-color: tomato;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 0.8;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
