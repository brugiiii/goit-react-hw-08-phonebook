import { NavList, StyledLink } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="/ ">Home</StyledLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        )}
      </NavList>
    </nav>
  );
};
