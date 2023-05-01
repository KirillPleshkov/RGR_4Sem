import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const NavbarHome = ({setModalLoginShow, setModalRegistrationShow}) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Конфигуратор</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav>
                                <Nav.Link onClick={() => setModalLoginShow(true)}>Войти</Nav.Link>
                                <Nav.Link onClick={() => setModalRegistrationShow(true)}>Регистрация</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarHome;