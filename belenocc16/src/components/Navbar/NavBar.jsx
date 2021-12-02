import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardWiget from "./CardWiget";



const NavBar = () => {
return (
    <div>
     <Navbar bg="light" expand="lg">
        <Container>
             <Navbar.Brand href="#home">Dietética</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto">
             <Nav.Link href="#home">Inicio</Nav.Link>
             <Nav.Link href="#link">Contacto</Nav.Link>
             <NavDropdown title="Productos" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Veggie</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Celiaco</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Deporte</NavDropdown.Item>
             <NavDropdown.Divider />
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <CardWiget/>
        </Container>
    </Navbar>
    </div>
);
};

export default NavBar;