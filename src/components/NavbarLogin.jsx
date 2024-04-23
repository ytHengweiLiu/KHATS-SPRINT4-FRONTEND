import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="white" data-bs-theme="light">
        <Container>
        <Navbar.Brand ><span style={{ color: 'green', fontFamily: 'Alice', fontSize: '2em' }}>KHATS</span></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
            <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarLogin
