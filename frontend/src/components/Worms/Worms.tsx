import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Separator } from "@worms/common/Separator";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Container } from "react-bootstrap";
import { Warning, WormsImage } from "@worms/assets";
import { useState } from "react";
import { useWindowSize } from "@worms/hooks/useWindowSize";
import { ModalForm } from "../ModalForm";
import {
  ButtonStyled,
  DescriptionText,
  DescriptionTextWarning,
  ImageStyled,
  RowStyled,
  TitleStyled,
} from "./styled";
import { SvgIcon } from "@worms/common/SvgIcon";

export const Worms = () => {
  const dropdownsValues = [
    {
      label: "Старатель",
      value: "staratel",
    },
    {
      label: "Дендробена",
      value: "dendrobena",
    },
  ];

  const [dropdownValue, setDropdownValue] = useState(dropdownsValues[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (value: boolean) => () => {
    setIsModalOpen(value);
  };

  const { isInfiniteDesktopView } = useWindowSize();

  return (
    <>
      <Separator isBottomPadding isTopPadding>
        <Container>
          <RowStyled>
            <Col lg={4}>
              <FlexWrapper
                flexDirection="column"
                alignItems={isInfiniteDesktopView ? "center" : "flex-start"}
                width="100%"
              >
                <ImageStyled src={WormsImage} />
                <FlexWrapper
                  flexDirection="column"
                  alignItems="center"
                  width="100%"
                  gap="16px"
                >
                  <Dropdown style={{ width: "100%", fontSize: "16px" }}>
                    <Dropdown.Toggle
                      style={{
                        width: "100%",
                        fontSize: "16px",
                        height: "50px",
                      }}
                      variant="success"
                      id="dropdown-basic"
                    >
                      {dropdownValue.label}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: "100%", fontSize: "16px" }}>
                      {dropdownsValues.map((item) => {
                        return (
                          <Dropdown.Item
                            style={{ padding: "10px 16px" }}
                            key={item.value}
                            onClick={() => setDropdownValue(item)}
                          >
                            {item.label}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                  <ButtonStyled
                    onClick={openModal(true)}
                    type="submit"
                    text="Заказать"
                    width={"100%"}
                  />
                  <DescriptionTextWarning>
                    <SvgIcon
                      marginRight="8px"
                      width="22px"
                      height="22px"
                      fill="#fff"
                      iconSrc={Warning}
                    />
                    <span>
                      Доставка червей ограничена. Максимальный вес — 5 кг. В
                      случае, если вам необходимо большее количество, оставьте
                      ваше пожелание в комментарии формы заказа, после чего
                      решим с вами вопрос индивидуально.
                    </span>
                  </DescriptionTextWarning>
                </FlexWrapper>
              </FlexWrapper>
            </Col>
            <Col lg={6}>
              <FlexWrapper
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                gap="16px"
              >
                <TitleStyled>Хотите приобрести наших червей?</TitleStyled>
                <DescriptionText>
                  Для оформления заказа выберите вид червей, который хотите
                  приобрести у нас и нажмите "Заказать". Далее заполните форму с
                  вашими контактными данными и ожидайте подтверждение заказа.
                </DescriptionText>
              </FlexWrapper>
            </Col>
          </RowStyled>
        </Container>
      </Separator>
      <ModalForm
        title={`Заказать товар: червь-${dropdownValue.label.toLowerCase()}`}
        isOpen={isModalOpen}
        data={[{ label: "Товар", value: dropdownValue.label }]}
        onClose={openModal(false)}
      />
    </>
  );
};
