import { Col, Container, Row } from "react-bootstrap";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styled from "styled-components";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Separator } from "@worms/common/Separator";
import { Title } from "@worms/common/Title";
import { useWindowSize } from "@worms/hooks/useWindowSize";
import { ADAPTIVE } from "@worms/utils/constants";

const SubtitleStyled = styled.h5`
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 24px;
  }
`;

const TextStyled = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #fff;
  font-weight: 300;

  ${ADAPTIVE.minWidth.desktop} {
    font-size: 18px;
  }
`;

const RowStyled = styled(Row)`
  gap: 30px;

  ${ADAPTIVE.minWidth.desktop} {
    gap: 0;
  }
`;

export const YandexMap = () => {
  const { isInfiniteDesktopView } = useWindowSize();

  return (
    <Separator isBottomPadding isTopPadding>
      <Container>
        <Row>
          <Col>
            <FlexWrapper width="100%" justifyContent="center">
              <Title colorValue="#fff">Где нас найти?</Title>
            </FlexWrapper>
          </Col>
        </Row>
        <RowStyled>
          <Col lg={8}>
            <YMaps>
              <Map
                width="100%"
                height={isInfiniteDesktopView ? "500px" : "300px"}
                defaultState={{ center: [55.6789, 28.304441], zoom: 17 }}
              >
                <Placemark defaultGeometry={[55.6789, 28.304441]} />
              </Map>
            </YMaps>
          </Col>
          <Col lg={4}>
            <FlexWrapper flexDirection="column" gap="32px">
              <FlexWrapper flexDirection="column" gap="8">
                <SubtitleStyled>Адрес</SubtitleStyled>
                <TextStyled>
                  Беларусь, Витебская область, Верхнедвинский район,
                  Борковичский сельсовет, деревня Дворица, дом 6
                </TextStyled>
              </FlexWrapper>

              <FlexWrapper flexDirection="column" gap="8">
                <SubtitleStyled>Контакты</SubtitleStyled>
                <TextStyled href="tel:+375297145127">
                  тел: +375 (29) 714-51-27
                </TextStyled>
                <TextStyled>email: test-email@gmail.com</TextStyled>
              </FlexWrapper>
            </FlexWrapper>
          </Col>
        </RowStyled>
      </Container>
    </Separator>
  );
};
