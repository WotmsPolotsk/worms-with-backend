import { ADAPTIVE } from "@worms/utils/constants";
import styled, { css } from "styled-components";

export const SeparatorStyled = styled.div<{
  $bgColor?: string;
  $isBottomPadding?: boolean;
  $isTopPadding?: boolean;
}>`
  padding-bottom: ${({ $isBottomPadding }) => ($isBottomPadding ? "40px" : 0)};
  padding-top: ${({ $isTopPadding }) => ($isTopPadding ? "40px" : 0)};

  width: 100%;

  font-size: 24px;
  margin-bottom: -1px;

  ${ADAPTIVE.minWidth.tablet} {
    padding-bottom: ${({ $isBottomPadding }) =>
      $isBottomPadding ? "40px" : 0};
    padding-top: ${({ $isTopPadding }) => ($isTopPadding ? "40px" : 0)};
  }

  ${ADAPTIVE.minWidth.desktop} {
    margin-bottom: 0;

    padding-bottom: ${({ $isBottomPadding }) =>
      $isBottomPadding ? "80px" : 0};
    padding-top: ${({ $isTopPadding }) => ($isTopPadding ? "80px" : 0)};
  }

  ${({ $bgColor }) =>
    $bgColor &&
    css`
      background-color: ${$bgColor};
    `}
`;
