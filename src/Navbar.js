import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const NavBar = ({toggleTheme}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Recipe Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <BootstrapSwitchButton onChange={toggleTheme} checked={false} onstyle="dark" offstyle="light" style="border"/>
        </Navbar>
    )
}

export default NavBar;