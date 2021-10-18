import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../image/logo2.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className="nav-container" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block"
                    />{' '}
                        Medicare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end w-75 mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Appoinment</Nav.Link>
                            <Nav.Link href="#pricing">My account</Nav.Link>
                            <Nav.Link href="#profile"><i class="far fa-user-circle"></i></Nav.Link>
                            <Navbar.Text>
                                Signed as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;