import styled from '@emotion/styled';

export const ListItem = styled.li`
  width: calc((100% - 66px) / 3);
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid gray;
  padding: 15px 5px;
  border-radius: 4px;
`;

export const Button = styled.button`
  position: relative;
  min-width: 70px;
`;

export const Name = styled.span``;

export const Number = styled.a`
  font-weight: 700;
  cursor: pointer;
  padding: 0;

  color: black;

  transition: color 150ms linear;

  :hover {
    color: tomato;
  }
`;
