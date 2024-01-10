import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Separator } from "@worms/common/Separator";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputRange, { Range } from "react-input-range";
import styled from "styled-components";

import { Form } from "../Form";
import { ADAPTIVE } from "@worms/utils/constants";
import {
  Basket1,
  Basket2,
  Basket3,
  Basket4,
  Basket5,
  Warning,
} from "@worms/assets";
import { SvgIcon } from "@worms/common/SvgIcon";

const WeightMarkStyled = styled.div`
  font-size: 16px;
`;

const ImageStyled = styled.img<{ isVisible: boolean }>`
  width: 170px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const RowStyled = styled(Row)`
  justify-content: center;
  align-items: center;

  ${ADAPTIVE.minWidth.desktop} {
    gap: 16px;
  }
`;

export const TitleStyled = styled.h3`
  text-transform: uppercase;
  color: #121212;
  font-size: 28px;

  ${ADAPTIVE.minWidth.tablet} {
    font-size: 34px;
  }

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 48px;
  }
`;

export const DescriptionText = styled.span`
  font-size: 16px;
  color: #121212;
  font-weight: 400;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
  }
`;

export const DescriptionTextWarning = styled.span`
  font-size: 14px;
  color: #121212;
  font-weight: 400;
`;

export const Biogum = () => {
  const [step, setStep] = useState(0);
  const [value, setValue] = useState<number | Range>(5);

  const images = [Basket1, Basket2, Basket3, Basket4, Basket5];

  useEffect(() => {
    const num = +value;

    switch (true) {
      case num >= 200 && num < 400:
        setStep(1);
        break;
      case num >= 400 && num < 600:
        setStep(2);
        break;
      case num >= 600 && num < 800:
        setStep(3);
        break;
      case num >= 800:
        setStep(4);
        break;
      default:
        setStep(0);
    }
  }, [value]);

  return (
    <Separator isBottomPadding isTopPadding bgColor="#fff">
      <Container>
        <RowStyled>
          <Col lg={6}>
            <FlexWrapper
              flexDirection="column"
              alignItems="flex-start"
              width="100%"
              gap="16px"
            >
              <TitleStyled>Хотите приобрести биогумус у нас?</TitleStyled>
              <DescriptionText>
                Если вы хотите приобрести биогумус у нас, тогда вам нужно просто
                заполнить нашу форму заказа. Укажите нужное для вас количество
                биогумуса и ваши контактные данные. Наши сотрудники перезвонят
                вам в ближайшее время.
              </DescriptionText>
              <DescriptionTextWarning>
                <SvgIcon
                  marginRight="8px"
                  width="22px"
                  height="22px"
                  fill="#121212"
                  iconSrc={Warning}
                />
                <span>
                  Доставка биогумуса осуществляется мешками по 5 кг. Максимально
                  доставляемое количество — 1000 кг. В случае, если вам нужно
                  другое количество товара, вопрос решается индивидуально.
                </span>
              </DescriptionTextWarning>
            </FlexWrapper>
          </Col>
          <Col lg={4}>
            <FlexWrapper
              flexDirection="column"
              alignItems="center"
              width="100%"
            >
              <FlexWrapper
                flexDirection="column"
                alignItems="center"
                width="100%"
                gap="0px"
              >
                {images.map((image, index) => {
                  const isVisible = index === step;

                  return <ImageStyled isVisible={isVisible} src={image} />;
                })}

                <FlexWrapper
                  flexDirection="column"
                  width="100%"
                  alignItems="center"
                >
                  <InputRange
                    minValue={5}
                    step={5}
                    maxValue={1000}
                    value={value}
                    onChange={(value) => setValue(value)}
                  />
                  <WeightMarkStyled>кг</WeightMarkStyled>
                </FlexWrapper>
              </FlexWrapper>
              <Form
                addData={[
                  { label: "Товар", value: "Биогумус" },
                  { label: "Вес", value: `${value} кг` },
                ]}
              />
            </FlexWrapper>
          </Col>
        </RowStyled>
      </Container>
    </Separator>
  );
};
