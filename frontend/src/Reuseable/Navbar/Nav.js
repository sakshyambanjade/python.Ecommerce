import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
    <div class='nav'>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="./">E-SHOES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./jordan">Jordan</Nav.Link>
            <Nav.Link href="./adidas">Adidas</Nav.Link>
            <Nav.Link href="./checkout">checkout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <br />
    </>
  );
}

export default ColorSchemesExample;