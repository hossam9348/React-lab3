import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default class MyNav extends Component {
  render() {
    return (
        <Navbar bg="dark" className="navbar-dark"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">Hossam Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/products" className="nav-link">Products</NavLink>
              <NavLink to="/products/0/edit" className="nav-link">Add Products</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}