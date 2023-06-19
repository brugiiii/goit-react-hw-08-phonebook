import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import { toast } from 'react-toastify';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted && toast.success('Welcome!');

  return shouldRedirect ? <Navigate to="/contacts" replace /> : children;
}
