import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../image/logo2.png'
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user);
    return (
        <Navbar className="nav-container" expand="lg" variant="dark" sticky="top" >
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={logo}
                    width="60"
                    height="60"
                    className="d-inline-block"
                />{' '}
                    <span className="fw-bold" >Medicare</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-75 mx-auto">
                        <Nav.Link as={HashLink} to="/home#home"
                        >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"
                        >Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Appoinment</Nav.Link>
                        <Nav.Link as={Link} to="/account">My account</Nav.Link>
                        {user?.email ? <Button className="btn-regular" onClick={logOut} variant="dark">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.email && <img className="pro-pic" src={user.photoURL} alt="" />}
                        <Navbar.Text>
                            <Link className="naming" to="/account">{user?.displayName}</Link>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;