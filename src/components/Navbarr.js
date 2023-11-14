import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-dark text-light"
      style={{ color: "white" }}
    >
      <Container>
        <Navbar.Brand href="#home">FASTECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Profile</Nav.Link>
            <Nav.Link href="#link">Activity</Nav.Link>
            <Nav.Link href="#link">How it works</Nav.Link>
          </Nav>
          {/* Buttons on the right */}
          <Nav className="ml-auto">
            <Button variant="outline-secondary" className="mr-2">
              Secondary
            </Button>
            <Button variant="dark">Dark</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
