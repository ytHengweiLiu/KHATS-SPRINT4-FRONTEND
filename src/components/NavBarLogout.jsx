import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarLogout = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <Navbar bg="white" data-bs-theme="light">
      <Container>
        <Navbar.Brand style={{ color: 'green', fontFamily: 'Alice', fontSize: '2em' }}>KHATS</Navbar.Brand>
        <Nav className="me-auto mx-auto">
          <Nav.Link style={{ color: 'black', fontFamily: 'Alice', fontSize: '1.1em' }} >{pageName}</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={() => navigate('/login')}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLogout;