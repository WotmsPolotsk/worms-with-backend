import { ADAPTIVE } from "@worms/utils/constants";
import styled, { css } from "styled-components";

export const FrontStyled = styled.div<{ bgImage: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  cursor: pointer;

  ${ADAPTIVE.minWidth.desktop} {
    height: 500px;
  }
  position: relative;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center center;

  border-radius: 5px;
  z-index: 2;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const BackStyled = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  min-height: 400px;

  ${ADAPTIVE.minWidth.desktop} {
    min-height: 500px;
  }
  border-radius: 5px;
  background-color: #fff;

  font-size: 16px;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
  }

  transition: transform 0.5s linear;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const FlipStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible !important;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transition: transform 0.5s linear;
`;

export const CardWrapper = styled.div<{ isClick: boolean }>`
  width: 100%;
  height: 400px;
  cursor: pointer;
  position: relative;

  ${ADAPTIVE.minWidth.desktop} {
    height: 500px;
  }

  ${({ isClick }) =>
    isClick &&
    css`
      ${FlipStyled} {
        transform: rotateY(180deg);
      }
    `}

  &:hover {
    ${ADAPTIVE.minWidth.desktop} {
      ${FlipStyled} {
        transform: rotateY(180deg);
      }
    }
  }
`;

export const MaskStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px;

  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

export const TitleStyled = styled.h4`
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  z-index: 1;
`;

export const Notification = styled.span`
  display: block;
  position: absolute;
  text-align: center;
  bottom: 15px;
  left: 50%;
  color: #fff;
  transform: translate(-50%, 0);

  font-size: 14px;
  font-weight: 300;
  z-index: 1;
`;
