// react
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

// redux

import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';

// styledComponents
import { Container } from './App.styled';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import Spinner from 'components/Spinner';

// Notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
const AppBar = lazy(() => import('../AppBar'));
const Home = lazy(() => import('pages/Home'));
const ContactsBook = lazy(() => import('pages/ContactsBook'));
const LogInForm = lazy(() => import('pages/Auth/LogInForm'));
const SignUpForm = lazy(() => import('pages/Auth/SignUpForm'));
const NonExistentPage = lazy(() => import('pages/NonExistentPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Suspense
          fallback={
            <Spinner
              styles={{ justifyContent: 'center', marginTop: 150 }}
              width={100}
              height={100}
            />
          }
        >
          <Routes>
            <Route path="/" element={<AppBar />}>
              {!isFetchingCurrentUser && (
                <>
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
                </>
              )}
            </Route>
          </Routes>
        </Suspense>
      </Container>
      <ToastContainer />
    </>
  );
};
