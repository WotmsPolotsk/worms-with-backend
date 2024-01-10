import { ADAPTIVE } from "@worms/utils/constants";
import styled from "styled-components";

export const Title = styled.h3<{ colorValue?: string }>`
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-weight: 500;
  color: ${({ colorValue = "#121212" }) => colorValue};

  ${ADAPTIVE.minWidth.tablet} {
    font-size: 34px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 42px;
    margin-bottom: 80px;
  }
`;
