import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'



function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Dietetica</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='/categoria/vegano'>Productos Veganos</Nav.Link>
                            <Nav.Link href='/categoria/deporte'>Suplementos</Nav.Link>                       
                            <CartWidget />
                        </Nav>                        
                    </Navbar.Collapse>
                    <Link to="/cart" >Carrito</Link>                       
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
