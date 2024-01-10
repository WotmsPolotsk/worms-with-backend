import { ADAPTIVE } from "@worms/utils/constants";
import { Row } from "react-bootstrap";
import styled from "styled-components";

export const TitleStyled = styled.h3`
  font-size: 42px;
  text-transform: uppercase;
  margin-bottom: 80px;
  color: #121212;
`;

export const RowStyled = styled(Row)`
  gap: 20px;
  justify-content: center;

  ${ADAPTIVE.minWidth.desktop} {
    gap: 0;
  }
`;
