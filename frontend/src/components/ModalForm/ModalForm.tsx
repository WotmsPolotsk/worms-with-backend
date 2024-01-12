import { useEffect, useRef, useState } from "react";
import {
  ButtonStyled,
  ModalWindowContainer,
  ModalWindowStyled,
  TitleStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { FormWithDescription } from "../FormWithDescription";
import { Notification } from "../Notification";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  data?: Array<{ label: string; value: string }>;
}

export const ModalForm = (props: ModalFormProps) => {
  const {
    isOpen,
    onClose,
    title = "Оставьте ваши контактные данные и мы вам перезвоним",
    data,
  } = props;

  const [notification, setNotificationData] = useState<{
    isOpen: boolean;
    type: "error" | "success";
    text: string;
  }>({
    isOpen: false,
    type: "success",
    text: "",
  });

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

  const callback = (data: { text: string; type: "error" | "success" }) => {
    onClose();
    setNotificationData({
      isOpen: true,
      type: data.type,
      text: data.text,
    });
  };

  return isOpen ? (
    <ModalWindowContainer>
      <ModalWindowStyled ref={ref}>
        <FlexWrapper flexDirection="column" alignItems="center">
          <TitleStyled>{title}</TitleStyled>
          <FormWithDescription
            callback={callback}
            addData={data}
            secondaryButon={
              <ButtonStyled
                onClick={() => onClose()}
                text="Отмена"
                width="100%"
              />
            }
          />
        </FlexWrapper>
      </ModalWindowStyled>
    </ModalWindowContainer>
  ) : notification.isOpen ? (
    <Notification
      onClose={() =>
        setNotificationData({
          isOpen: false,
          type: "success",
          text: "",
        })
      }
      isOpen={notification.isOpen}
      text={notification.text}
      type={notification.type}
    />
  ) : null;
};
