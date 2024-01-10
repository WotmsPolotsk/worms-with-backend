import { HomePageBgImage, WormsBgImage } from "@worms/assets";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import styled from "styled-components";

export const HeroSectionStyled = styled.div`
  background-image: url(${HomePageBgImage});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 500px;
`;

export const HomeStyled = styled(FlexWrapper)`
  width: 100%;
  position: relative;
`;

export const HomeBgStyled = styled(FlexWrapper)`
  width: 100%;
  height: 100dvh;
  position: fixed;
  background-image: url(${WormsBgImage});
  background-repeat: repeat;
`;

export const HomeContent = styled.div`
  width: 100%;
  z-index: 10;
`;
