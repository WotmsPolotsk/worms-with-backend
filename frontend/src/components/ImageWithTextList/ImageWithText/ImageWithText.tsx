import { PropsWithChildren, useRef } from "react";
import {
  ImageStyled,
  ImageWithTextStyled,
  RowStyled,
  TextStyled,
  TitleStyled,
} from "./styled";
import { Col, Container } from "react-bootstrap";
import { useIntersectionElement } from "@worms/hooks/useIntersectionElement";

interface ImageWithRextProps extends PropsWithChildren {
  isRightToLef?: boolean;
  imageSrc: string;
  title: string;
  alt?: string;
}

export const ImageWithText = (props: ImageWithRextProps) => {
  const { isRightToLef = false, imageSrc, children, title, alt } = props;

  const ref = useRef<HTMLDivElement>(null);
  const { isShowed } = useIntersectionElement({ ref });

  return (
    <ImageWithTextStyled ref={ref} isRightToLeft={isRightToLef}>
      <Container>
        <RowStyled>
          <Col lg={4}>
            <ImageStyled
              alt={alt}
              isShowed={isShowed}
              isRightToLeft={isRightToLef}
              src={imageSrc}
            />
          </Col>
          <Col lg={8}>
            <TitleStyled isShowed={isShowed} isRightToLeft={isRightToLef}>
              {title}
            </TitleStyled>
            <TextStyled isShowed={isShowed} isRightToLeft={isRightToLef}>
              {children}
            </TextStyled>
          </Col>
        </RowStyled>
      </Container>
    </ImageWithTextStyled>
  );
};
