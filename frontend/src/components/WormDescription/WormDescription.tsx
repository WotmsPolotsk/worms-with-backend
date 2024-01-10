import { useRef } from "react";
import {
  CaseStyled,
  Description,
  DescriptionText,
  IconTextStyled,
} from "./styled";
import { useIntersectionElement } from "@worms/hooks/useIntersectionElement";
import { SvgIcon } from "@worms/common/SvgIcon";
import { Apple, Dollar, Fish } from "@worms/assets";

import { Separator } from "@worms/common/Separator";
import { GridWrapper } from "@worms/common/GridWrapper";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Title } from "@worms/common/Title";
import { useWindowSize } from "@worms/hooks/useWindowSize";

interface DescriprionCaseProps {
  item: {
    title: string;
    icon: string;
  };
}

const DescriprionCase = ({ item }: DescriprionCaseProps) => {
  const ref = useRef(null);

  const { isShowed } = useIntersectionElement({ ref });

  return (
    <CaseStyled
      ref={ref}
      isShowed={isShowed}
      flexDirection="column"
      alignItems="center"
      gap="32px"
    >
      <SvgIcon width="70px" height="70px" fill="#fff" iconSrc={item.icon} />
      <IconTextStyled>{item.title}</IconTextStyled>
    </CaseStyled>
  );
};

export const WormDescription = () => {
  const { isMobileView } = useWindowSize();

  const iconsData = [
    {
      title: "Увеличат доходы",
      icon: Dollar,
    },
    {
      title: "Повысят урожайность",
      icon: Apple,
    },
    {
      title: "Помогут в рыбалке",
      icon: Fish,
    },
  ];

  return (
    <>
      <Separator isTopPadding isBottomPadding>
        <GridWrapper>
          <FlexWrapper width="100%" alignItems="center" flexDirection="column">
            <Title colorValue="#fff">Чем полезны наши черви?</Title>

            <FlexWrapper
              width="100%"
              justifyContent="center"
              gap={isMobileView ? "40px" : "80px"}
              alignItems="center"
              flexDirection={isMobileView ? "column" : "row"}
            >
              {iconsData.map((item) => {
                return (
                  <DescriprionCase key={item.icon + item.title} item={item} />
                );
              })}
            </FlexWrapper>

            <Description>
              <DescriptionText>
                Для тех, кто желает открыть свой бизнес, у кого есть опыт или
                интерес к сельскому хозяйству и устойчивому развитию мы
                рекомендуем приобрести червей-старателей. Биогумус, получаемый с
                использованием данного вида является ценным удобрением для
                почвы, что делает его востребованным продуктом для
                сельскохозяйственных и садовых предприятий. А для хорошего
                рыбацкого улова мы рекомендуем приобрести червей дендробена!
              </DescriptionText>
            </Description>
          </FlexWrapper>
        </GridWrapper>
      </Separator>
    </>
  );
};
