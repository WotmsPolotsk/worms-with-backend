import { Col, Container } from "react-bootstrap";
import {
  ButtonStyled,
  DescriptionText,
  RowStyled,
  SeparatorStyled,
  TitleStyled,
} from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { useState } from "react";
import { ModalForm } from "../ModalForm";

export const BottomForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (value: boolean) => () => {
    setIsModalOpen(value);
  };
  return (
    <>
      <SeparatorStyled bgColor="#fff">
        <Container>
          <RowStyled>
            <Col lg={10}>
              <FlexWrapper
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                gap="16px"
              >
                <TitleStyled>Остались вопросы?</TitleStyled>
                <DescriptionText>
                  Если у вас остались какие-то вопросы, вы можете свяязаться с
                  нами используя наши контакты ниже, или же просто нажмите на
                  кнопку "получить обратный звонок", заполните форму и наши
                  сотрудники с вами свяжутся.
                </DescriptionText>
                <ButtonStyled
                  onClick={openModal(true)}
                  className="hero-button"
                  text="Получить обратный звонок"
                />
              </FlexWrapper>
            </Col>
          </RowStyled>
        </Container>
      </SeparatorStyled>
      <ModalForm
        data={[{ label: "Запрос", value: "Обратный звонок" }]}
        isOpen={isModalOpen}
        onClose={openModal(false)}
      />
    </>
  );
};
