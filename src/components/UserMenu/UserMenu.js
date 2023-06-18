import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import { Container, WelcomeMessage, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  return (
    <Container>
      <WelcomeMessage>
        Welcome, <Name>{name}</Name>!
      </WelcomeMessage>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </Container>
  );
};
