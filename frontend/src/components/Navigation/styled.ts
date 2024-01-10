import { Button } from "@worms/common/Button";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { ADAPTIVE } from "@worms/utils/constants";
import styled from "styled-components";

export const NavigationStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(11, 16, 21, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(11, 16, 21, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(11, 16, 21, 0.2);
`;

export const NavigationContentStyled = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageStyled = styled.img`
  max-width: 60px;

  ${ADAPTIVE.minWidth.desktop} {
    max-width: 70px;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoTextStyled = styled.div`
  font-size: 24px;
`;

export const ContactStyled = styled(FlexWrapper)`
  gap: 16px;
  display: flex;
  align-items: center;
`;

export const ContactItem = styled.a`
  gap: 8px;
  display: flex;
  text-decoration: none;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #121212;
  cursor: pointer;
`;

export const ContactItemMobile = styled.a`
  gap: 8px;
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  font-size: 16px;
  font-weight: 400;
  color: #121212;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export const SvgStyled = styled.img`
  width: 22px;
`;

export const ButtonStyled = styled(Button)`
  background-color: #121212;
  color: #fff;
  font-size: 14px;

  &:hover {
    background-color: #fff;
    color: #121212;
  }
`;
