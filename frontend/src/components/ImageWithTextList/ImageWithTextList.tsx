import { Separator } from "@worms/common/Separator";
import { ImageWithText } from "./ImageWithText";
import { ImageWithTextListStyled } from "./styled";
import { Chicken, Farm, Fishing } from "@worms/assets";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "@worms/common/Title";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { useWindowSize } from "@worms/hooks/useWindowSize";

export const ImageWithTextList = () => {
  const { isInfiniteDesktopView } = useWindowSize();

  return (
    <Separator bgColor="#fff">
      <ImageWithTextListStyled>
        <Container>
          <Row>
            <Col>
              <FlexWrapper justifyContent="center">
                <Title>Кому подойдут наши черви?</Title>
              </FlexWrapper>
            </Col>
          </Row>
        </Container>
        <ImageWithText
          title="Фермерам"
          alt="Червь-старателя для фермеров"
          imageSrc={Farm}
        >
          В саду или огороде червь старатель, разведение которого возможно в
          домашних условиях, разрыхлит почву (ни одна техника не справится с
          этой задачей лучше него), переработает органические остатки и насытит
          грунт полезными элементами, такими как азот, фосфор, калий и др. В
          результате у растений, посаженных в обработанную червями почву,
          быстрее сформируется корневая система и они будут крепче тех, которые
          вырастут на участке без червей
        </ImageWithText>
        <ImageWithText
          title="Рыбацким магазинам и рыбакам"
          alt="Червь-дендробена для рыбаков"
          isRightToLef={isInfiniteDesktopView}
          imageSrc={Fishing}
        >
          Прочная кожа червей и выносливость делают их отличным выбором для
          использования в качестве приманки. Наши черви обладают натуральным
          запахом и вкусом, что делает их привлекательными для рыбы. Возможность
          червей выдерживать различные погодные условия, как жаркую, так и
          холодную погоду, делает их устойчивыми и доступными в разные сезоны.
          Это особенно важно для рыболовов, которые занимаются ловлей
          круглогодично. Их применение может быть эффективным как при рыбалке с
          поплавочными снастями, так и при использовании донных снастей.
        </ImageWithText>
        <ImageWithText
          title="Животноводам"
          alt="Червь-старатель для животноводов"
          imageSrc={Chicken}
        >
          Наши черви богаты белком, содержат от 67% до 72% белка, что делает их
          отличным источником питательных веществ для животных. Кроме того, они
          содержат 7-19% жиров и 18-20% углеводов, что обеспечивает
          разнообразное питание. Богаты необходимыми аминокислотами, которые
          могут отсутствовать в растительных и животных кормах, делая их ценным
          источником питательных веществ
        </ImageWithText>
      </ImageWithTextListStyled>
    </Separator>
  );
};
