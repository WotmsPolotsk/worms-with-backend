import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Separator } from "@worms/common/Separator";
import { ADAPTIVE } from "@worms/utils/constants";
import { Button } from "@worms/common/Button";

export const TitleStyled = styled.h3`
  text-transform: uppercase;
  color: #121212;
  font-size: 28px;

  ${ADAPTIVE.minWidth.tablet} {
    font-size: 34px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 48px;
  }
`;

export const SeparatorStyled = styled(Separator)`
  padding: 40px 0;

  ${ADAPTIVE.minWidth.desktop} {
    padding: 160px 0;
  }
`;

export const DescriptionText = styled.span`
  font-size: 16px;
  color: #121212;
  font-weight: 400;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
  }
`;

export const RowStyled = styled(Row)`
  justify-content: center;
  align-items: center;

  gap: 30px;
  padding-bottom: 30px;

  ${ADAPTIVE.minWidth.desktop} {
    gap: 0;
  }
`;

export const ButtonStyled = styled(Button)`
  font-size: 14px;
  width: 100%;

  ${ADAPTIVE.minWidth.desktop} {
    width: auto;
  }
`;
