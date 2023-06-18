import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 20px 0;
  display: inline-block;
`;
