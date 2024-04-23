import React from 'react'
import { useNavigate } from 'react-router-dom';
const NavbarLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="white" data-bs-theme="light">
        <Container>
        <Navbar.Brand style={{ color: 'green', fontFamily: 'Alice', fontSize: '2em' }}>KHATS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
            <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarLogin
