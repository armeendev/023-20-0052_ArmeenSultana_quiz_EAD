import React from "react";
import { Container } from "react-bootstrap";

const Welcome = () => {
  const midStyle = {
    color: "Black",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "36px" /* 150% */,
    letterSpacing: "0.5px",
    padding: 0,
  };
  const welcomeStyle = {
    color: "black",
    fontFamily: "Poppins",
    fontSize: "72px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "82px",
    letterSpacing: "-2px",
  };

  return (
    <>
      <Container className="text-left" style={welcomeStyle}>
        Discover, collect, and charity in extraordinary NFT marketplace
      </Container>
      <Container className="text-left" style={midStyle}>
        In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
        vestibulum nibh mi venenatis
      </Container>
    </>
  );
};

export default Welcome;
