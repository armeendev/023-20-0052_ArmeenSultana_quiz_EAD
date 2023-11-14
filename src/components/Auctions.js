import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Auctions = () => {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-between">
        <Col xs="auto">
          <span>HOT Auctions</span>
        </Col>
        <Col xs="auto">
          <span>View all</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Auctions;
