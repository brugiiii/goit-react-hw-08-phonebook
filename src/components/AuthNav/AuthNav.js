import { NavLink } from 'react-router-dom';
import { AuthList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <NavLink to="signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="login">Log in</NavLink>
      </li>
    </AuthList>
  );
};
