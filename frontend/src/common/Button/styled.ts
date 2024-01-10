import styled from "styled-components";

export const ButtonStyled = styled.button<{ $width: string; $bgColor: string }>`
  outline: none;
  background-color: ${({ $bgColor }) => $bgColor};
  width: ${({ $width }) => $width};
  border: 1px solid #121212;
  color: #121212;
  padding: 16px 28px;
  text-transform: uppercase;
  border-radius: 30px;
  font-weight: 500;

  &:hover {
    background-color: #121212;
    color: #fff;
    transition: all ease-out 300ms;
  }
`;
