import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import callIcon from '../assets/call-icon.png'


const NavBarMemu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Navbar.Brand href="#home" className="pl-md-2">
                <img className="w-100" src={logo} alt="Serpentix Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="mr-md-3 pr-md-2 justify-content-between" id="responsive-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#design" className="text-dark pr-md-5">Design</Nav.Link>
                    <Nav.Link href="#laser" className="text-dark pr-md-5">Laser Cutting</Nav.Link>
                    <Nav.Link href="#press brake" className="text-dark pr-md-5">Metal Forming</Nav.Link>
                    <Nav.Link href="Machining" className="text-dark pr-md-5">Machining</Nav.Link>
                    <Nav.Link href="#welding" className="text-dark pr-md-5">Welding</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="tel:3202604416" className="text-dark pl-md-5">
                        <img className="w-75" src={callIcon} alt="call icon"/>
                    </Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
};
 
export default NavBarMemu ;