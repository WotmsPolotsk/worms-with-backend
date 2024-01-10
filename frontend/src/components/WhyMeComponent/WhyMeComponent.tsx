import { useIntersectionElement } from "@worms/hooks/useIntersectionElement";
import { CaseStyled, Content, IconTextStyled, WhyMeStyled } from "./styled";

import { useRef } from "react";
import { Coins, Handshake, Shipping } from "@worms/assets";
import { Separator } from "@worms/common/Separator";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { SvgIcon } from "@worms/common/SvgIcon";
import { Title } from "@worms/common/Title";
import { GridWrapper } from "@worms/common/GridWrapper";
import { useWindowSize } from "@worms/hooks/useWindowSize";

export const WhyMeComponent = () => {
  const ref = useRef(null);

  const { isMobileView } = useWindowSize();

  const { isShowed } = useIntersectionElement({ ref });

  const iconsData = [
    {
      title: "Лучшие цены на рынке",
      icon: Coins,
    },
    {
      title: "Быстрая доставка",
      icon: Shipping,
    },
    {
      title: "Надежное сотрудничество",
      icon: Handshake,
    },
  ];

  let seconds = 1;
  return (
    <Separator isTopPadding isBottomPadding>
      <GridWrapper>
        <WhyMeStyled>
          <Content flexDirection="column" alignItems="center">
            <Title colorValue="#fff">Почему выбирают именно нас?</Title>

            <FlexWrapper
              alignItems="center"
              justifyContent="center"
              ref={ref}
              flexDirection={isMobileView ? "column" : "row"}
              width="100%"
              gap={isMobileView ? "40px" : "80px"}
            >
              {iconsData.map((item) => {
                seconds += 0.2;
                return (
                  <CaseStyled
                    isShowed={isShowed}
                    seconds={seconds}
                    key={item.icon + item.title}
                    flexDirection="column"
                    alignItems="center"
                    gap="32px"
                  >
                    <SvgIcon
                      width="70px"
                      height="70px"
                      fill="#fff"
                      iconSrc={item.icon}
                    />
                    <IconTextStyled>{item.title}</IconTextStyled>
                  </CaseStyled>
                );
              })}
            </FlexWrapper>
          </Content>
        </WhyMeStyled>
      </GridWrapper>
    </Separator>
  );
};
