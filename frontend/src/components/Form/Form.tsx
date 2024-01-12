import "react-phone-number-input/style.css";
import { ReactNode, useCallback, useState } from "react";
import { ButtonStyled, ButtonsPanel, FormStyled } from "./styled";

import { Mail, Phone, User } from "@worms/assets";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Input } from "@worms/common/Input";
import { sendEmalService } from "@worms/services/sendEmalService";
import { Notification } from "../Notification";

const reqExpEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const reqExpNumber = /^\+?\d+$/;

interface FormProps {
  secondaryButon?: ReactNode;
  buttonText?: string;
  addData?: Array<{ label: string; value: string }>;
  callback?: () => void;
}

const defaultFormState = {
  name: "",
  email: "",
  phone: "",
};

const defaultFormStateTouch = {
  name: false,
  email: false,
  phone: false,
};

export const Form = (props: FormProps) => {
  const {
    secondaryButon,
    buttonText = "Сделать заказ онлайн",
    addData,
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

  const [fields, setFields] = useState(defaultFormState);

  const [fieldsErrors, setFieldsErros] = useState<{
    name: string;
    email: string;
    phone: string;
  }>(defaultFormState);

  const [fieldsTouch, setFieldsTouch] = useState<{
    name: boolean;
    email: boolean;
    phone: boolean;
  }>(defaultFormStateTouch);

  const onChangeField =
    (field: "email" | "phone" | "name") => (value: string) => {
      setFieldsTouch({ ...fieldsTouch, [field]: true });

      if (field === "email") {
        if (!value.toLowerCase().match(reqExpEmail)) {
          setFieldsErros({
            ...fieldsErrors,
            email: "Некорректный email адрес",
          });
        } else {
          setFieldsErros({ ...fieldsErrors, email: "" });
        }
      }

      if (field === "phone") {
        if (!value.toLowerCase().match(reqExpNumber)) {
          setFieldsErros({
            ...fieldsErrors,
            phone: "Некорректный номер телефона",
          });
        } else {
          setFieldsErros({ ...fieldsErrors, phone: "" });
        }
      }

      if (field === "name" && value) {
        setFieldsErros({ ...fieldsErrors, name: "" });
      }

      setFields({ ...fields, [field]: value });
    };

  const onBlurField = (field: "email" | "phone" | "name") => () => {
    if (!fields[field].length) {
      setFieldsErros({ ...fieldsErrors, [field]: "Заполните поле" });
    }
  };

  const prepareSubmitResultFields = (data: {
    name: string;
    phone: string;
    email: string;
  }) => {
    return Object.entries(data).map((item) => {
      switch (item[0]) {
        case "name":
          return {
            label: "Имя",
            value: item[1],
          };
        case "phone":
          return {
            label: "Телефон",
            value: item[1],
          };
        case "email":
          return {
            label: "Email",
            value: item[1],
          };
        default:
          return {
            label: "",
            value: "",
          };
      }
    });
  };

  const onSubmit = useCallback(() => {
    const isError = Object.values(fieldsErrors).some((item) => item);
    const isNotEmpty = Object.values(fields).every((item) => item);

    if (!fieldsTouch.email) {
      setFieldsErros((prev) => {
        return { ...prev, email: "Заполните поле" };
      });
    }

    if (!fieldsTouch.name) {
      setFieldsErros((prev) => {
        return { ...prev, name: "Заполните поле" };
      });
    }

    if (!fieldsTouch.phone) {
      setFieldsErros((prev) => {
        return { ...prev, phone: "Заполните поле" };
      });
    }

    if (!isError && isNotEmpty) {
      const fieldsResult = prepareSubmitResultFields(fields);
      const submitResult = addData
        ? [...addData, ...fieldsResult]
        : fieldsResult;

      sendEmalService(submitResult)
        .then((data) =>
          setNotificationData({
            isOpen: true,
            type: "success",
            text: data,
          })
        )
        .catch(() =>
          setNotificationData({
            isOpen: true,
            type: "error",
            text: "Упс, что-то пошло не так",
          })
        );

      setFieldsErros(defaultFormState);
      setFields(defaultFormState);
      setFieldsTouch(defaultFormStateTouch);
    }
  }, [fields, fieldsErrors, fieldsTouch]);

  return (
    <>
      <FormStyled>
        <FlexWrapper flexDirection="column" width="100%" gap="16px">
          <Input
            onChange={onChangeField("name")}
            error={fieldsErrors.name}
            value={fields.name}
            label="Имя"
            iconSrc={User}
            onBlur={onBlurField("name")}
          />
          <Input
            onChange={onChangeField("email")}
            error={fieldsErrors.email}
            value={fields.email}
            label="Email"
            iconSrc={Mail}
            onBlur={onBlurField("email")}
          />
          <Input
            onChange={onChangeField("phone")}
            error={fieldsErrors.phone}
            value={fields.phone}
            label="Телефон"
            iconSrc={Phone}
            onBlur={onBlurField("phone")}
          />
          <ButtonsPanel
            flexDirection="column"
            width="100%"
            gap="16px"
            flexWrap="nowrap"
            alignItems="center"
          >
            <ButtonStyled onClick={onSubmit} text={buttonText} width={"100%"} />
            {secondaryButon && secondaryButon}
          </ButtonsPanel>
        </FlexWrapper>
      </FormStyled>

      {notification.isOpen && (
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
      )}
    </>
  );
};
