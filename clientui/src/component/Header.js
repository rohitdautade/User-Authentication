import React from 'react';
import { Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/"><small className="text-primary">Rohit</small><span className="text-danger">Autade</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/registraion">Sign up</Nav.Link>
                        <Nav.Link href="/login">Sign in</Nav.Link>



                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </>
    )

}
export default Header;