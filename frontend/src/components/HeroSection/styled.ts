import { HomePageBgImage } from "@worms/assets";
import { Button } from "@worms/common/Button";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { ADAPTIVE } from "@worms/utils/constants";
import styled, { keyframes } from "styled-components";

export const HeroSectionStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${HomePageBgImage});
  background-position: center center;
  background-size: cover;
  width: 100%;

  min-height: 380px;
  padding: 12px;

  ${ADAPTIVE.minWidth.tablet} {
    padding: 20px;
    height: 500px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    padding: 80px;
    height: 100vh;
  }
`;

export const TopContent = styled(FlexWrapper)`
  z-index: 1;
`;

export const BottomContent = styled(FlexWrapper)`
  z-index: 1;
`;

export const MaskStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

export const HeroContentStyled = styled.div`
  width: 100%;

  ${ADAPTIVE.minWidth.desktop} {
    width: 70%;
  }
  z-index: 1;
`;

export const TitleStyled = styled.h1`
  font-size: 32px;

  ${ADAPTIVE.minWidth.tablet} {
    font-size: 48px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 86px;
  }

  text-transform: uppercase;
  color: #fff;
`;

export const SubtitleStyled = styled.h4`
  padding-left: 3px;
  text-transform: uppercase;
  color: #fff;

  font-size: 24px;

  ${ADAPTIVE.minWidth.tablet} {
    font-size: 34px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 42px;
  }
`;

export const SvgStyled = styled.img`
  width: 22px;
`;

export const IconTextStyled = styled.h5`
  color: #fff;
  font-size: 18px;
  text-align: center;
  font-weight: 300;
`;

const rotate = keyframes`
   0% { transform: translate(1px, 1px) rotate(0deg); }
  5% { transform: translate(-1px, -2px) rotate(-1deg); }
  10% { transform: translate(-3px, 0px) rotate(1deg); }
  15% { transform: translate(3px, 2px) rotate(0deg); }
  20% { transform: translate(1px, -1px) rotate(1deg); }
  25% { transform: translate(-1px, -2px) rotate(-1deg); }
  30% { transform: translate(-3px, 0px) rotate(1deg); }
  35% { transform: translate(3px, 2px) rotate(0deg); }
  45% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(0, 0) rotate(0deg); }

  100% { transform: translate(0, 0) rotate(0deg); }
`;

export const ButtonStyled = styled(Button)`
  font-size: 14px;

  ${ADAPTIVE.minWidth.desktop} {
    animation: ${rotate} 1s;
    animation-iteration-count: infinite;
  }

  &:hover {
    animation: none;
  }
`;
