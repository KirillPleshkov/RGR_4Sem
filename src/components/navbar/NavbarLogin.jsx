import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useCookies} from "react-cookie";
import jwt_decode from "jwt-decode";

const NavbarLogin = () => {

    const [email, setEmail] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['token'])

    useEffect(() => {
        setEmail(jwt_decode(cookies.token).email)
    }, [])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Конфигуратор</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/configurator">
                                <Nav.Link >Конфигуратор</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <NavDropdown title={email} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => removeCookie('token')}>Выход</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarLogin;