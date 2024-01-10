import styled, { css } from "styled-components";

export const InputStyled = styled.input<{
  $isIconVisible: boolean;
  $isError: boolean;
}>`
  width: 100%;
  outline: none;
  border-radius: 8px;
  border: ${({ $isError }) =>
    $isError ? "1px solid #9c332c" : "1px solid #a6a6a6"};
  padding: 10px;
  font-size: 14px;

  padding-left: ${({ $isIconVisible }) => ($isIconVisible ? "45px" : "0")};

  &:focus {
    border: 1px solid #121212;
  }
`;

export const TextAreaStyled = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 8px;
  border: "1px solid #a6a6a6";
  padding: 10px;
  font-size: 14px;

  &:focus {
    border: 1px solid #121212;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputContainerStyled = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.span<{ isRequired?: boolean }>`
  display: block;
  font-weight: 500;
  color: #121212;
  font-size: 14px;
  margin-bottom: 8px;

  ${({ isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: "*";
        color: #9c332c;
      }
    `}
`;

export const ErrorLabel = styled.span`
  display: block;
  font-weight: 500;
  color: #9c332c;
  font-size: 12px;
`;

export const SvgStyled = styled.div`
  position: absolute;

  top: 47%;
  left: 15px;
  transform: translate(0, -50%);
`;
