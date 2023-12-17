import React from "react";
import { Button, Stack, Row, Col, Container } from "react-bootstrap";
export default function () {
  return (
    <div className=" container-sm rounded shadow-sm  position-absolute top-50 start-50 translate-middle bg-danger   ">
      <Container className="mx-auto my-5  ">
        <Row className="justify-content-around">
          <Col sm={1} className="bg-primary">
            1 of 2
          </Col>
          <Col sm={2} className="bg-secondary">
            2 of 2
          </Col>
        </Row>
      </Container>
    </div>
  );
}
