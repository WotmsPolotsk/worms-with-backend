import { Button } from "@worms/common/Button";
import { ADAPTIVE } from "@worms/utils/constants";
import styled from "styled-components";

export const ModalWindowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const ModalWindowStyled = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  overflow-x: auto;

  ${ADAPTIVE.minWidth.tablet} {
    width: 400px;
  }
`;

export const TitleStyled = styled.h5`
  font-size: 22px;
  color: #121212;
  text-align: center;
  margin-bottom: 16px;
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
