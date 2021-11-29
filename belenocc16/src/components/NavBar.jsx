import { Navbar, Container, NavDropdown, Nav} from "react-bootstrap";

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
        </Container>
    </Navbar>
    </div>
);
};

export default NavBar;