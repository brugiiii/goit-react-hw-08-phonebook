import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from 'redux/auth/auth-operations';

// components
import ContactsBook from 'pages/ContactsBook';
import AppBar from '../AppBar';
import { LogInForm, SignUpForm } from 'pages/Auth';
import Home from 'pages/Home';
import NonExistentPage from 'pages/NonExistentPage';

// styledComponents
import { Container } from './App.styled';

import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsBook />
              </PrivateRoute>
            }
          />

          <Route
            path="signup"
            element={
              <PublicRoute restricted>
                <SignUpForm />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LogInForm />
              </PublicRoute>
            }
          />

          <Route
            path="*"
            element={
              <PublicRoute>
                <NonExistentPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};
