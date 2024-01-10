import styled from "styled-components";

export const FlexWrapper = styled.div<{
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  width?: string;
  flexWrap?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  gap: ${({ gap }) => gap || "initial"};
  width: ${({ width }) => width || "auto"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
`;
