import { useEffect, useRef } from "react";
import {
  ButtonStyled,
  ImageStyled,
  ModalWindowContainer,
  ModalWindowStyled,
  TextStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { ErrorIcon, SuccessIcon } from "@worms/assets";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  type: "error" | "success";
}

export const Notification = (props: ModalFormProps) => {
  const { isOpen, onClose, text, type } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: Event) => {
    const currentElem = ref?.current?.contains(e.target as Node);

    if (ref?.current && !currentElem) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return isOpen ? (
    <ModalWindowContainer>
      <ModalWindowStyled ref={ref}>
        <FlexWrapper gap="8px" flexDirection="column" alignItems="center">
          <ImageStyled src={type === "success" ? SuccessIcon : ErrorIcon} />
          <TextStyled>{text}</TextStyled>
          <ButtonStyled
            onClick={() => onClose()}
            text={"Закрыть"}
            width={"100%"}
          />
        </FlexWrapper>
      </ModalWindowStyled>
    </ModalWindowContainer>
  ) : null;
};
