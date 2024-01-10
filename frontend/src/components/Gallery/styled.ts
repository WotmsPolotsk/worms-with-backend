import { styled } from "styled-components";

export const TitleStyled = styled.h3`
  font-size: 42px;
  text-transform: uppercase;
  margin-bottom: 80px;
  color: #121212;
`;

export const VideoStyled = styled.video`
  width: 100%;
`;

export const PlayStyled = styled.img<{ isVisible?: boolean }>`
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    ${PlayStyled} {
      width: 100px;
    }
  }
`;
