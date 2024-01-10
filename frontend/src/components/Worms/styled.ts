import { Row } from "react-bootstrap";
import styled from "styled-components";
import { ADAPTIVE } from "@worms/utils/constants";
import { Button } from "@worms/common/Button";

export const ImageStyled = styled.img`
  align-self: center;
  width: 100%;

  ${ADAPTIVE.minWidth.tablet} {
    width: 300px;
  }
`;

export const RowStyled = styled(Row)`
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  gap: 16px;

  ${ADAPTIVE.minWidth.desktop} {
    flex-direction: row;
  }
`;

export const TitleStyled = styled.h3`
  text-transform: uppercase;
  color: #fff;
  font-size: 28px;

  text-align: left;

  ${ADAPTIVE.minWidth.tablet} {
    font-size: 34px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 48px;
    text-align: right;
  }
`;

export const DescriptionText = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 400;

  text-align: left;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
    text-align: right;
  }
`;

export const ButtonStyled = styled(Button)`
  font-size: 14px;
  border: none;

  &:hover {
    background-color: #999999;
  }
`;

export const DescriptionTextWarning = styled.span`
  font-size: 14px;
  color: #121212;
  font-weight: 400;
  color: #fff;
`;
