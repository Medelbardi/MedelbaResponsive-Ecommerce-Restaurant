import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import logo from './../../assets/logo.png'

const Navs = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} title="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#home">Explore Food</Nav.Link>
                        <Nav.Link href="#link">Review</Nav.Link>
                        <Nav.Link href="#home">Faq</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id="lastnav">+212 665447788</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Navs;