import React from 'react'
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <header>
        <Navbar id='navbar' expand="lg" collapseOnSelect>
            <Container id='container'>
                <Navbar.Brand id='navbar' href="/">
                    <img src={logo} alt="logo" width="100" height="100" className="d-inline-block align-top" />
                    <h1>Plaisir</h1>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart"><FaShoppingCart/> Carrinho</Nav.Link>
                    <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default Header
