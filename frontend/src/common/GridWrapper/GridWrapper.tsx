import { PropsWithChildren } from "react";

import { Col, Container, Row } from "react-bootstrap";

interface GridWrapperProps extends PropsWithChildren {}

export const GridWrapper = (props: GridWrapperProps) => {
  const { children } = props;

  return (
    <div>
      <Container>
        <Row>
          <Col lg={12}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};
