import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  const footerStyle = {
    color: "black",
    fontFamily: "Poppins",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    width: "455.111px",
  };
  return (
    <>
      <Row>
        <Col xs={6}>
          <Container fluid className="text-start" style={footerStyle}>
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </Container>
        </Col>
        <Col xs={6}>
          <Container fluid>
            <Row className="d-flex justify-content-between">
              <Col xs="auto">
                <span>Market Place </span>
              </Col>
              <Col xs="auto">
                <span>Company </span>
              </Col>
              <Col xs="auto">
                <span>Contact </span>
              </Col>
            </Row>

            <Row className="d-flex justify-content-between">
              <Col xs="auto">
                <span>Home </span>
              </Col>
              <Col xs="auto">
                <span>About Us </span>
              </Col>
              <Col xs="auto">
                <span>Facebook </span>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col xs="auto">
                <span>Activity </span>
              </Col>
              <Col xs="auto">
                <span>Services</span>
              </Col>
              <Col xs="auto">
                <span>Instagram</span>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col xs="auto">
                <span>Discover </span>
              </Col>
              <Col xs="auto">
                <span>Portfolio</span>
              </Col>
              <Col xs="auto">
                <span>Twitter</span>
              </Col>
            </Row>

            <Row className="d-flex justify-content-between">
              <Col xs="auto">
                <span>Learn More</span>
              </Col>
              <Col xs="auto">
                <span></span>
              </Col>
              <Col xs="auto">
                <span>Email </span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
