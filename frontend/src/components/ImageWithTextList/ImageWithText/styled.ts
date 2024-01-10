import { ADAPTIVE } from "@worms/utils/constants";
import { Row } from "react-bootstrap";
import styled, { css } from "styled-components";

export const ImageWithTextStyled = styled.div<{ isRightToLeft: boolean }>`
  ${({ isRightToLeft }) => isRightToLeft && "direction: rtl;"}

  width: 100%;
  margin-bottom: 32px;
`;

export const ImageStyled = styled.img<{
  isShowed: boolean;
  isRightToLeft: boolean;
}>`
  width: 100%;
  object-fit: cover;

  padding: ${({ isRightToLeft }) =>
    isRightToLeft ? "0 0 0 200px" : "0 200px 0 0"};
  opacity: 0;

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      padding: 0;
      opacity: 1;
    `};
`;

export const RowStyled = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleStyled = styled.h5<{
  isShowed: boolean;
  isRightToLeft: boolean;
}>`
  font-size: 22px;
  text-transform: uppercase;
  color: #121212;
  opacity: 0;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 24px;
  }

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      opacity: 1;
    `};
`;

export const TextStyled = styled.span<{
  isShowed: boolean;
  isRightToLeft: boolean;
}>`
  font-size: 16px;
  color: #121212;
  opacity: 0;

  font-size: 16px;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
  }

  ${({ isShowed }) =>
    isShowed &&
    css`
      transition: all ease 1.5s;
      opacity: 1;
    `};
`;
