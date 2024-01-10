import { Separator } from "@worms/common/Separator";
import { Col, Container, Row } from "react-bootstrap";
import { RowStyled } from "./styled";
import { FlexWrapper } from "@worms/common/FlexWrapper";
import { Biogumus, Dendrobena, Staratel } from "@worms/assets";
import { WormVariant } from "./WormVariant";
import { Title } from "@worms/common/Title";

export const WormsVariants = () => {
  const variants = [
    {
      title: "Червь старатель",
      image: Staratel,
      description:
        "Червь-старатель отличается высокой скоростью разложения органических материалов, таких как навоз, пищевые отходы и другие органические вещества. Он превращает их в биогумус, который обогащает почву. Данный вид приспосабливается к различным климатическим условиям и типам почвы. Черви-старатели способны выживать в разнообразных средах, что делает его эффективным организмом для использования в различных регионах и условиях.",
    },
    {
      title: "Биогумус",
      image: Biogumus,
      description:
        "Биогумус — это органическое удобрение, которое получается в результате биотехнологической переработки органических отходов, особенно животноводческих, с использованием метода верми-компостирования. Процесс верми-компостирования включает в себя использование технологической линии навозного червя, в данном случае, вид Eisenia foetida (червь-старатель).",
    },
    {
      title: "Червь дендробена",
      image: Dendrobena,
      description:
        "Червь дендробена — вид дождевых червей, специально выведенных в Европе для использования в рыболовстве. Эти черви отличаются активным движением и естественным запахом, что делает их эффективными приманками. Они были специально выведены с учетом потребностей рыболовов, обладают хорошей стойкостью и активностью, что делает их привлекательными для использования в рыболовных условиях.",
    },
  ];
  return (
    <Separator bgColor="#fff">
      <Container>
        <Row>
          <Col>
            <FlexWrapper width="100%" justifyContent="center">
              <Title>Что мы можем вам предложить?</Title>
            </FlexWrapper>
          </Col>
        </Row>
        <RowStyled>
          {variants.map((item) => {
            return (
              <Col lg={4} md={12} sm={12} xs={12}>
                <WormVariant
                  key={item.title + item.description}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Col>
            );
          })}
        </RowStyled>
      </Container>
    </Separator>
  );
};
