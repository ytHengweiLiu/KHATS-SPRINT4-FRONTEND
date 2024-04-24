import axios from 'axios';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const NavbarLogout = ({ pageName, token, setToken }) => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.delete('http://localhost:3001/khats/auth/logout', {}, {
        headers: {
          authorization: `${token}`
        }
      });
      navigate('/login')
      setToken(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Navbar bg="white" data-bs-theme="light">
      <Container>
        <Navbar.Brand ><span style={{ color: 'green', fontFamily: 'Alice', fontSize: '2em' }}>KHATS</span></Navbar.Brand>
        <Nav className="me-auto mx-auto">
          <span style={{ color: 'black', fontFamily: 'Alice', fontSize: '1.5em' }} >{pageName}</span>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLogout;
